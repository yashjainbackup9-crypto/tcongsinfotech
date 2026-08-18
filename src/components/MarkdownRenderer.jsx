import React, { useState } from 'react';
import { Copy, Check, Sparkles, CheckCircle2 } from 'lucide-react';

export const MarkdownRenderer = ({ content }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  if (!content) return null;

  // Split content into blocks by code blocks first
  const parseBlocks = (text) => {
    const lines = text.trim().split('\n');
    const blocks = [];
    let currentCodeBlock = null;
    let currentTextBlock = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('```')) {
        if (currentCodeBlock) {
          // Closing code block
          blocks.push({
            type: 'code',
            language: currentCodeBlock.language,
            code: currentCodeBlock.lines.join('\n')
          });
          currentCodeBlock = null;
        } else {
          // Starting code block
          if (currentTextBlock.length > 0) {
            blocks.push({
              type: 'text',
              content: currentTextBlock.join('\n')
            });
            currentTextBlock = [];
          }
          const lang = line.trim().replace(/^```/, '').trim() || 'javascript';
          currentCodeBlock = { language: lang, lines: [] };
        }
      } else if (currentCodeBlock) {
        currentCodeBlock.lines.push(line);
      } else {
        currentTextBlock.push(line);
      }
    }

    if (currentCodeBlock) {
      blocks.push({
        type: 'code',
        language: currentCodeBlock.language,
        code: currentCodeBlock.lines.join('\n')
      });
    }

    if (currentTextBlock.length > 0) {
      blocks.push({
        type: 'text',
        content: currentTextBlock.join('\n')
      });
    }

    return blocks;
  };

  // Helper to render inline formatting (bold, inline code, links)
  const renderInlineFormattedText = (text) => {
    const parts = [];
    let remaining = text;
    let keyIdx = 0;

    while (remaining.length > 0) {
      // Inline code: `code`
      const codeMatch = remaining.match(/^`([^`]+)`/);
      if (codeMatch) {
        parts.push(
          <code 
            key={keyIdx++} 
            className="px-1.5 py-0.5 mx-0.5 rounded-md font-mono text-xs font-bold bg-[#E51A4B]/10 dark:bg-[#E2EC07]/10 text-[#E51A4B] dark:text-[#E2EC07] border border-[#E51A4B]/20 dark:border-[#E2EC07]/20"
          >
            {codeMatch[1]}
          </code>
        );
        remaining = remaining.slice(codeMatch[0].length);
        continue;
      }

      // Bold: **text**
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
      if (boldMatch) {
        parts.push(
          <strong key={keyIdx++} className="font-extrabold text-[var(--text-main)]">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.slice(boldMatch[0].length);
        continue;
      }

      // Italic: *text*
      const italicMatch = remaining.match(/^\*([^*]+)\*/);
      if (italicMatch) {
        parts.push(
          <em key={keyIdx++} className="italic text-[var(--text-muted)]">
            {italicMatch[1]}
          </em>
        );
        remaining = remaining.slice(italicMatch[0].length);
        continue;
      }

      // Plain character search
      const nextSpecial = remaining.search(/[`*]/);
      if (nextSpecial === -1) {
        parts.push(remaining);
        break;
      } else if (nextSpecial === 0) {
        parts.push(remaining[0]);
        remaining = remaining.slice(1);
      } else {
        parts.push(remaining.slice(0, nextSpecial));
        remaining = remaining.slice(nextSpecial);
      }
    }

    return parts;
  };

  const renderTextBlock = (text, blockIdx) => {
    const lines = text.split('\n');
    const elements = [];
    let currentList = null;

    lines.forEach((line, lineIdx) => {
      const trimmed = line.trim();

      if (!trimmed) {
        if (currentList) {
          elements.push(
            <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
              {currentList}
            </ul>
          );
          currentList = null;
        }
        return;
      }

      // H3: ### Header
      if (trimmed.startsWith('### ')) {
        if (currentList) {
          elements.push(
            <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
              {currentList}
            </ul>
          );
          currentList = null;
        }
        elements.push(
          <h3 
            key={`h3-${lineIdx}`} 
            className="text-xl sm:text-2xl font-black tracking-tight text-[var(--text-main)] mt-8 mb-3 flex items-center gap-2 pt-2 border-b border-black/5 dark:border-white/5 pb-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#E51A4B]"></span>
            <span>{renderInlineFormattedText(trimmed.replace(/^###\s+/, ''))}</span>
          </h3>
        );
        return;
      }

      // H2: ## Header
      if (trimmed.startsWith('## ')) {
        if (currentList) {
          elements.push(
            <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
              {currentList}
            </ul>
          );
          currentList = null;
        }
        elements.push(
          <h2 
            key={`h2-${lineIdx}`} 
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)] mt-10 mb-4 flex items-center gap-2.5"
          >
            <Sparkles className="w-5 h-5 text-[#E51A4B] shrink-0" />
            <span className="primary-gradient-text">{renderInlineFormattedText(trimmed.replace(/^##\s+/, ''))}</span>
          </h2>
        );
        return;
      }

      // H1: # Header
      if (trimmed.startsWith('# ')) {
        if (currentList) {
          elements.push(
            <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
              {currentList}
            </ul>
          );
          currentList = null;
        }
        elements.push(
          <h1 
            key={`h1-${lineIdx}`} 
            className="text-3xl sm:text-4xl font-black text-[var(--text-main)] mt-12 mb-6"
          >
            {renderInlineFormattedText(trimmed.replace(/^#\s+/, ''))}
          </h1>
        );
        return;
      }

      // List Items: - or *
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const itemContent = trimmed.replace(/^[-*]\s+/, '');
        const li = (
          <li key={`li-${lineIdx}`} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <div className="w-4 h-4 rounded-full bg-[#E51A4B]/15 text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-3 h-3" />
            </div>
            <div>
              {renderInlineFormattedText(itemContent)}
            </div>
          </li>
        );

        if (!currentList) {
          currentList = [li];
        } else {
          currentList.push(li);
        }
        return;
      }

      // Ordered List Items: 1. 2.
      const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (orderedMatch) {
        const itemNum = orderedMatch[1];
        const itemContent = orderedMatch[2];
        const li = (
          <li key={`oli-${lineIdx}`} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <span className="w-5 h-5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 font-mono text-[10px] font-bold text-[#E51A4B] dark:text-[#E2EC07] flex items-center justify-center shrink-0 mt-0.5">
              {itemNum}
            </span>
            <div>
              {renderInlineFormattedText(itemContent)}
            </div>
          </li>
        );

        if (!currentList) {
          currentList = [li];
        } else {
          currentList.push(li);
        }
        return;
      }

      // Blockquotes: >
      if (trimmed.startsWith('>')) {
        if (currentList) {
          elements.push(
            <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
              {currentList}
            </ul>
          );
          currentList = null;
        }
        elements.push(
          <blockquote 
            key={`bq-${lineIdx}`} 
            className="p-4 sm:p-5 my-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border-l-4 border-[#E51A4B] text-xs sm:text-sm text-[var(--text-muted)] italic leading-relaxed"
          >
            {renderInlineFormattedText(trimmed.replace(/^>\s*/, ''))}
          </blockquote>
        );
        return;
      }

      // Standard Paragraph
      if (currentList) {
        elements.push(
          <ul key={`ul-${lineIdx}`} className="space-y-2.5 my-4 pl-1">
            {currentList}
          </ul>
        );
        currentList = null;
      }

      elements.push(
        <p key={`p-${lineIdx}`} className="text-xs sm:text-sm md:text-[15px] text-[var(--text-muted)] leading-relaxed my-3.5">
          {renderInlineFormattedText(trimmed)}
        </p>
      );
    });

    if (currentList) {
      elements.push(
        <ul key={`ul-last`} className="space-y-2.5 my-4 pl-1">
          {currentList}
        </ul>
      );
    }

    return <div key={`text-block-${blockIdx}`}>{elements}</div>;
  };

  const blocks = parseBlocks(content);

  return (
    <div className="space-y-6 text-left">
      {blocks.map((block, idx) => {
        if (block.type === 'code') {
          return (
            <div 
              key={`code-${idx}`} 
              className="my-6 rounded-2xl overflow-hidden border border-black/15 dark:border-white/10 shadow-2xl bg-[#09090D] text-slate-200 font-mono text-xs sm:text-sm"
            >
              {/* Code Header Bar */}
              <div className="px-4 py-2.5 bg-[#121218] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block"></span>
                  <span className="ml-2 text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider font-semibold">
                    {block.language}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(block.code, idx)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[11px] text-slate-300 transition-colors cursor-pointer"
                  title="Copy code to clipboard"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-sans">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Container */}
              <div className="p-4 sm:p-5 overflow-x-auto scrollbar-thin">
                <pre className="font-mono leading-relaxed text-slate-200">
                  <code>{block.code}</code>
                </pre>
              </div>
            </div>
          );
        }

        return renderTextBlock(block.content, idx);
      })}
    </div>
  );
};
