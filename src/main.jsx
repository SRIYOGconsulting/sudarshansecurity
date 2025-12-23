import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollToTop from './MyComponent/ScrollToTop.jsx'

// Add icons to the library
library.add(faTwitter, faFacebookF, faInstagram, faEnvelope, faPhone, faMapMarkerAlt)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
