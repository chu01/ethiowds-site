export function CodeBlock({ language, children }) {
    return (
      <pre className="code-block">
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    )
  }