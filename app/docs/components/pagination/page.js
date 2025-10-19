export default function PaginationPage() {
    return (
      <div className="docs-page">
        <h1>Pagination</h1>
        <p className="lead">
          Navigation for dividing content across multiple pages with numbered links.
        </p>
  
        <section className="docs-section">
          <h2>Basic Pagination</h2>
          <div className="component-demo">
            <nav className="ethio-pagination">
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">Previous</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">1</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link active">2</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">3</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">Next</a>
              </li>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-pagination">
    <li class="ethio-pagination-item">
      <a href="#" class="ethio-pagination-link">Previous</a>
    </li>
    <li class="ethio-pagination-item">
      <a href="#" class="ethio-pagination-link">1</a>
    </li>
    <li class="ethio-pagination-item">
      <a href="#" class="ethio-pagination-link active">2</a>
    </li>
    <li class="ethio-pagination-item">
      <a href="#" class="ethio-pagination-link">Next</a>
    </li>
  </nav>`}
          </pre>
        </section>
  
        <section className="docs-section">
          <h2>Pagination Sizes</h2>
          <div className="component-demo" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <nav className="ethio-pagination ethio-pagination-sm">
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link active">1</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">2</a>
              </li>
            </nav>
            
            <nav className="ethio-pagination">
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link active">1</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">2</a>
              </li>
            </nav>
            
            <nav className="ethio-pagination ethio-pagination-lg">
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link active">1</a>
              </li>
              <li className="ethio-pagination-item">
                <a href="#" className="ethio-pagination-link">2</a>
              </li>
            </nav>
          </div>
  
          <pre className="code-block">
  {`<nav class="ethio-pagination ethio-pagination-sm">
    <!-- Small pagination -->
  </nav>
  
  <nav class="ethio-pagination">
    <!-- Default pagination -->
  </nav>
  
  <nav class="ethio-pagination ethio-pagination-lg">
    <!-- Large pagination -->
  </nav>`}
          </pre>
        </section>
      </div>
    )
  }