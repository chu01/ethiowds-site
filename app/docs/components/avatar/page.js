export default function AvatarPage() {
    return (
      <div className="docs-page">
        <h1>Avatar</h1>
        <p className="lead">
          User profile pictures and identity icons with various sizes and styles.
        </p>
  
        <section className="docs-section">
          <h2>Avatar Sizes</h2>
          <div className="component-demo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="ethio-avatar ethio-avatar-sm">AB</div>
              <div className="ethio-avatar ethio-avatar-md">CD</div>
              <div className="ethio-avatar ethio-avatar-lg">EF</div>
              <div className="ethio-avatar ethio-avatar-xl">GH</div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-avatar ethio-avatar-sm">AB</div>
  <div class="ethio-avatar ethio-avatar-md">CD</div>
  <div class="ethio-avatar ethio-avatar-lg">EF</div>
  <div class="ethio-avatar ethio-avatar-xl">GH</div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Avatar Variants</h2>
          <div className="component-demo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="ethio-avatar ethio-avatar-md">AB</div>
              <div className="ethio-avatar ethio-avatar-secondary ethio-avatar-md">CD</div>
              <div className="ethio-avatar ethio-avatar-success ethio-avatar-md">EF</div>
              <div className="ethio-avatar ethio-avatar-warning ethio-avatar-md">GH</div>
              <div className="ethio-avatar ethio-avatar-error ethio-avatar-md">IJ</div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-avatar ethio-avatar-md">AB</div>
  <div class="ethio-avatar ethio-avatar-secondary ethio-avatar-md">CD</div>
  <div class="ethio-avatar ethio-avatar-success ethio-avatar-md">EF</div>
  <div class="ethio-avatar ethio-avatar-warning ethio-avatar-md">GH</div>
  <div class="ethio-avatar ethio-avatar-error ethio-avatar-md">IJ</div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Image Avatars</h2>
          <div className="component-demo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="ethio-avatar ethio-avatar-md">
                <img src="/api/placeholder/40/40" alt="User" />
              </div>
              <div className="ethio-avatar ethio-avatar-lg">
                <img src="/api/placeholder/60/60" alt="User" />
              </div>
              <div className="ethio-avatar ethio-avatar-xl">
                <img src="/api/placeholder/80/80" alt="User" />
              </div>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-avatar ethio-avatar-md">
    <img src="/path/to/image.jpg" alt="User">
  </div>
  <div class="ethio-avatar ethio-avatar-lg">
    <img src="/path/to/image.jpg" alt="User">
  </div>
  <div class="ethio-avatar ethio-avatar-xl">
    <img src="/path/to/image.jpg" alt="User">
  </div>`}
          </pre>
        </section>
      </div>
    )
  }