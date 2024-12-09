"use client"

import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Configuration for the chat widget
    window.VG_CONFIG = {
      ID: '4tcvfdywljvitdv0', // YOUR AGENT ID
      region: 'eu', // YOUR ACCOUNT REGION
      render: 'bottom-right', // Can be 'full-width' or 'bottom-left' or 'bottom-right'
      stylesheets: [
        // Base TIXAE Agents CSS
        'https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css',
        // Add your custom css stylesheets, can also add relative URL ('/public/your-file.css)
      ],
    };

    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js';
    script.defer = true; // This makes the script load after the page loads

    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div style={{width: "0px", height: "0px"}} id="VG_OVERLAY_CONTAINER"></div>; // This component doesn't need to render anything
};

export default ChatWidget;