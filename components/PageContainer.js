import '@abiyub/ethiowds/dist/css/ethio-wds.css';

export default function PageContainer({ 
  children, 
  className = '',
  fullWidth = false 
}) {
  return (
    <div className={`page-container ${className}`}>
      <div className={`eth-container ${fullWidth ? 'eth-container--full' : ''}`}>
        {children}
      </div>
    </div>
  )
}