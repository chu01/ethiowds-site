import Image from 'next/image'

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
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600'
              }}>
                AB
              </div>
            </div>
            <div className="ethio-avatar ethio-avatar-lg">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600'
              }}>
                CD
              </div>
            </div>
            <div className="ethio-avatar ethio-avatar-xl">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--success)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600'
              }}>
                EF
              </div>
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