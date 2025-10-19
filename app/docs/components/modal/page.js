'use client'

export default function ModalPage() {
  const openModal = () => {
    if (typeof window !== 'undefined' && window.ethioWDS) {
      window.ethioWDS.openModal('demo-modal');
    }
  };

  const closeModal = () => {
    if (typeof window !== 'undefined' && window.ethioWDS) {
      window.ethioWDS.closeModal('demo-modal');
    }
  };

  return (
    <div className="docs-page">
      <h1>Modal</h1>
      <p className="lead">
        Dialog boxes and overlays for focused user interactions.
      </p>

      <section className="docs-section">
        <h2>Basic Modal</h2>
        <div className="component-demo">
          <button className="ethio-btn ethio-btn-primary" onClick={openModal}>
            Open Modal
          </button>
        </div>

        <pre className="code-block">
{`<!-- Modal Structure -->
<div class="ethio-modal" id="demo-modal">
  <div class="ethio-modal-content">
    <div class="ethio-modal-header">
      <h3>Modal Title</h3>
      <button class="ethio-modal-close" onclick="ethio.closeModal('demo-modal')">×</button>
    </div>
    <div class="ethio-modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="ethio-modal-footer">
      <button class="ethio-btn ethio-btn-ghost" onclick="ethio.closeModal('demo-modal')">Cancel</button>
      <button class="ethio-btn ethio-btn-primary">Confirm</button>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>
const ethio = new ethioWDS();
function openModal() {
  ethio.openModal('demo-modal');
}
</script>`}
        </pre>
      </section>

      {/* Modal Structure */}
      <div className="ethio-modal" id="demo-modal">
        <div className="ethio-modal-content">
          <div className="ethio-modal-header">
            <h3>Demo Modal</h3>
            <button className="ethio-modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="ethio-modal-body">
            <p>This is a demonstration of the EthioWDS modal component. You can put any content here including forms, images, or other components.</p>
            <div className="ethio-form-group">
              <label className="ethio-form-label">Name</label>
              <input type="text" className="ethio-form-input" placeholder="Enter your name" />
            </div>
          </div>
          <div className="ethio-modal-footer">
            <button className="ethio-btn ethio-btn-ghost" onClick={closeModal}>Cancel</button>
            <button className="ethio-btn ethio-btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}