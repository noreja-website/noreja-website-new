import React from "react";

interface MarkdownBlockProps {
  content: string;
  className?: string;
}

export const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ content, className = "" }) => {
  // For now, render static text with basic formatting
  // Later this can be enhanced with actual markdown parsing
  const formatText = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold mb-6 text-foreground">
              {paragraph.substring(2)}
            </h1>
          );
        }
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-semibold mb-4 text-foreground">
              {paragraph.substring(3)}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold mb-3 text-foreground">
              {paragraph.substring(4)}
            </h3>
          );
        }
        
        // Handle bold text
        const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        return (
          <p 
            key={index} 
            className="mb-4 text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedParagraph }}
          />
        );
      });
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {formatText(content)}
    </div>
  );
};