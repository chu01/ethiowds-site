export default function AlertsPage() {
    return (
      <div className="docs-page">
        <h1>Alerts</h1>
        <p className="lead">
          Provide contextual feedback messages for user actions.
        </p>
  
        <section className="docs-section">
          <h2>Alert Variants</h2>
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-alert ethio-alert-success">
              <strong>Success!</strong> Your action was completed successfully.
            </div>
  
            <div className="ethio-alert ethio-alert-warning">
              <strong>Warning!</strong> Please check your input and try again.
            </div>
  
            <div className="ethio-alert ethio-alert-error">
              <strong>Error!</strong> Something went wrong. Please try again.
            </div>
  
            <div className="ethio-alert ethio-alert-info">
              <strong>Info:</strong> This is an informational message.
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-alert ethio-alert-success">
    <strong>Success!</strong> Your action was completed.
  </div>
  
  <div class="ethio-alert ethio-alert-warning">
    <strong>Warning!</strong> Please check your input.
  </div>
  
  <div class="ethio-alert ethio-alert-error">
    <strong>Error!</strong> Something went wrong.
  </div>
  
  <div class="ethio-alert ethio-alert-info">
    <strong>Info:</strong> Informational message.
  </div>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Dismissible Alerts</h2>
          <div className="component-demo" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="ethio-alert ethio-alert-success ethio-alert-dismissible">
              <strong>Success!</strong> This alert can be dismissed.
              <button className="ethio-alert-close">×</button>
            </div>
  
            <div className="ethio-alert ethio-alert-warning ethio-alert-dismissible">
              <strong>Warning!</strong> Click the X to dismiss this alert.
              <button className="ethio-alert-close">×</button>
            </div>
          </div>
  
          <pre className="code-block">
  {`<div class="ethio-alert ethio-alert-success ethio-alert-dismissible">
    <strong>Success!</strong> This alert can be dismissed.
    <button class="ethio-alert-close">×</button>
  </div>`}
          </pre>
        </section>
      </div>
    )
  }