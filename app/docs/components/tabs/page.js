'use client'

import { useEffect } from 'react'

export default function TabsPage() {
  useEffect(() => {
    // Ensure EthioWDS is initialized
    if (typeof window !== 'undefined' && window.ethioWDS && !window.ethioInitialized) {
      new window.ethioWDS();
      window.ethioInitialized = true;
    }
  }, []);

  const switchTab = (tabId) => {
    if (typeof window !== 'undefined' && window.ethioWDS) {
      window.ethioWDS.switchTab('demo-tabs', tabId);
    }
  };

  return (
    <div className="docs-page">
      <h1>Tabs</h1>
      <p className="lead">
        Organize content into multiple panels with tabbed navigation.
      </p>

      <section className="docs-section">
        <h2>Basic Tabs</h2>
        <div className="component-demo">
          <div className="ethio-tabs">
            <ul className="ethio-tabs-list">
              <li>
                <button 
                  className="ethio-tabs-tab active" 
                  data-tab="tab1"
                  data-tab-group="demo-tabs"
                  onClick={() => switchTab('tab1')}
                >
                  Profile
                </button>
              </li>
              <li>
                <button 
                  className="ethio-tabs-tab" 
                  data-tab="tab2"
                  data-tab-group="demo-tabs"
                  onClick={() => switchTab('tab2')}
                >
                  Settings
                </button>
              </li>
              <li>
                <button 
                  className="ethio-tabs-tab" 
                  data-tab="tab3"
                  data-tab-group="demo-tabs"
                  onClick={() => switchTab('tab3')}
                >
                  Messages
                </button>
              </li>
            </ul>
            <div className="ethio-tabs-content">
              <div className="ethio-tabs-panel active" data-panel="tab1" data-panel-group="demo-tabs">
                <h3>Profile Information</h3>
                <p>This is the profile tab content. You can put user information, avatar, and personal details here.</p>
              </div>
              <div className="ethio-tabs-panel" data-panel="tab2" data-panel-group="demo-tabs">
                <h3>Account Settings</h3>
                <p>This is the settings tab. Include preferences, security settings, and account configuration here.</p>
              </div>
              <div className="ethio-tabs-panel" data-panel="tab3" data-panel-group="demo-tabs">
                <h3>Messages</h3>
                <p>This is the messages tab. Display conversations, notifications, and communication history here.</p>
              </div>
            </div>
          </div>
        </div>

        <pre className="code-block">
{`<div class="ethio-tabs">
  <ul class="ethio-tabs-list">
    <li>
      <button class="ethio-tabs-tab active" data-tab="tab1" data-tab-group="group1">
        Profile
      </button>
    </li>
    <li>
      <button class="ethio-tabs-tab" data-tab="tab2" data-tab-group="group1">
        Settings
      </button>
    </li>
  </ul>
  <div class="ethio-tabs-content">
    <div class="ethio-tabs-panel active" data-panel="tab1" data-panel-group="group1">
      <p>Tab 1 content</p>
    </div>
    <div class="ethio-tabs-panel" data-panel="tab2" data-panel-group="group1">
      <p>Tab 2 content</p>
    </div>
  </div>
</div>

<script>
const ethio = new ethioWDS();
function switchTab(tabId) {
  ethio.switchTab('group1', tabId);
}
</script>`}
        </pre>
      </section>
    </div>
  )
}