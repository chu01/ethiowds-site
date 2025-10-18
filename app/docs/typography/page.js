export default function TypographyPage() {
    return (
      <div className="docs-page">
        <h1>Typography</h1>
        <p className="lead">
          EthioWDS provides a robust typography system with Ethiopian language support.
        </p>
  
        <section className="docs-section">
          <h2>Headings</h2>
          <div className="component-demo" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <h1>Heading 1 - አማርኛ ፅሑፍ</h1>
            <h2>Heading 2 - ኢትዮጵያ የአፍሪካ ንጉስ</h2>
            <h3>Heading 3 - አዲስ አበባ ዋና ከተማ</h3>
            <h4>Heading 4 - የኢትዮጵያ ባህል እና ታሪክ</h4>
            <h5>Heading 5 - Ethiopian Culture and History</h5>
            <h6>Heading 6 - Built with EthioWDS</h6>
          </div>
  
          <pre className="code-block">
  {`<h1>Heading 1 - አማርኛ ፅሑፍ</h1>
  <h2>Heading 2 - ኢትዮጵያ የአፍሪካ ንጉስ</h2>
  <h3>Heading 3 - አዲስ አበባ ዋና ከተማ</h3>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Body Text</h2>
          <div className="component-demo" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <p>This is a regular paragraph with <strong>bold text</strong>, <em>italic text</em>, and a <a href="#">link example</a>. EthioWDS ensures excellent readability with proper line height and contrast.</p>
            
            <p className="ethio-text-amharic">
              ይህ የአማርኛ ፅሁፍ ነው። ኢትዮጵያ በጥንታዊት ታሪክ እና ባህላዊ ልዩ ልዩ ባህሎች የምትሸፈን ሀገር ናት። 
              ኢትዮጵያ በአፍሪካ ቀንድ አገራት ውስጥ አንደኛ የምትመደብ ሀገር ነች።
            </p>
            
            <small>This is small text for disclaimers and captions.</small>
          </div>
  
          <pre className="code-block">
  {`<p>Regular paragraph text</p>
  <p class="ethio-text-amharic">አማርኛ ፅሁፍ</p>
  <small>Small text for captions</small>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Font Families</h2>
          <div className="component-demo" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-family-sans)' }}>
              <strong>Sans-serif:</strong> Inter, Noto Sans Ethiopic, system-ui
            </div>
            <div style={{ fontFamily: 'Noto Sans Ethiopic, sans-serif' }} className="ethio-text-amharic">
              <strong>Amharic:</strong> ኖቶ ሳንስ ኢትዮፒክ - Noto Sans Ethiopic
            </div>
          </div>
        </section>
      </div>
    )
  }