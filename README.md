# Vue 3 Dashboard Template

## Demo 

🚀 Modern, responsive dashboard template built with Vue 3, Bootstrap 5, Pinia, and SweetAlert2.

## Demo
- http://localhost:3000

## ✨ Features

- 🎨 **Custom Bootstrap Theme** - Beautiful gradient colors and animations
- 🔐 **Authentication System** - Complete login/logout with role-based permissions
- 🗂️ **State Management** - Pinia for modern Vue 3 state management
- 🎉 **Beautiful Alerts** - SweetAlert2 for enhanced user notifications
- 📱 **Responsive Design** - Mobile-first approach with Bootstrap 5
- 🎭 **UI Components** - Comprehensive set of custom-styled components
- 🚦 **Vue Router 4** - Dynamic routing with lazy loading
- ⚡ **Vite** - Fast development and optimized builds

## 🎨 Custom Theme
# xxx
### Colors
- **Primary**: `#667eea` (Purple-blue gradient)
- **Secondary**: `#6c757d`
- **Success**: `#28a745`
- **Danger**: `#dc3545`
- **Warning**: `#ffc107`
- **Info**: `#17a2b8`

### Features
- Gradient buttons and badges
- Custom shadows and animations
- Enhanced form controls
- Beautiful cards and modals
- Responsive typography

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or download this template**
```bash
git clone <repository-url>
cd vue3-dashboard-template
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

### Login Credentials
- **Admin**: `admin` / `admin123`
- **Manager**: `manager` / `manager123`
- **User**: `user` / `user123`

## 📁 Project Structure

```
src/
├── api/                    # API services
├── assets/
│   └── css/
│       └── bootstrap-custom.css  # Custom Bootstrap theme
├── components/             # Reusable components
│   ├── BootstrapShowcase.vue    # UI components demo
│   ├── Sidebar.vue
│   ├── TopNavbar.vue
│   └── ...
├── composables/           # Vue 3 composables
│   ├── useAuth.js
│   ├── useProducts.js
│   └── ...
├── config/               # Configuration files
│   ├── bootstrap.js      # Bootstrap theme config
│   └── template.js       # Template settings
├── router/               # Vue Router configuration
├── stores/               # Pinia stores
│   ├── auth.js
│   └── index.js
├── utils/                # Utility functions
│   └── swal.js          # SweetAlert2 utilities
├── views/                # Page components
└── App.vue
```

## 🔧 Configuration

### Theme Customization
Edit `src/config/bootstrap.js` to customize:
- Colors and gradients
- Typography
- Spacing
- Shadows
- Animations

### Template Settings
Edit `src/config/template.js` to configure:
- Features on/off
- Layout settings
- API configuration
- Security settings
- Default menu items

### Custom CSS
Edit `src/assets/css/bootstrap-custom.css` for:
- Custom Bootstrap overrides
- Component styles
- Animations
- Utility classes

## 🎯 Usage Examples

### Using Custom Buttons
```vue
<template>
  <button class="btn btn-gradient-primary">
    <i class="fas fa-rocket me-2"></i>
    Gradient Button
  </button>
</template>
```

### Using SweetAlert2
```javascript
import { swalUtils } from '@/utils/swal'

// Success notification
await swalUtils.success('Success!', 'Operation completed')

// Confirmation dialog
const result = await swalUtils.confirm('Delete item?', 'This cannot be undone')
if (result.isConfirmed) {
  // Delete logic
}
```

### Using Pinia Store
```javascript
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Login
await authStore.login({ username, password })

// Check authentication
if (authStore.isAuthenticated) {
  // User is logged in
}
```

### Using Bootstrap Config
```javascript
import { bootstrapConfig } from '@/config/bootstrap'

// Use theme colors
const primaryColor = bootstrapConfig.colors.primary
const gradientPrimary = bootstrapConfig.colors.gradients.primary
```

## 📱 Responsive Design

The template is fully responsive with:
- Mobile-first approach
- Collapsible sidebar
- Adaptive navigation
- Touch-friendly controls
- Optimized for all screen sizes

## 🔒 Security Features

- JWT-like token authentication
- Role-based access control
- Route guards
- Secure localStorage handling
- Session timeout
- CSRF protection ready

## 🎭 UI Components

Visit `/components` page to see all available components:
- Custom buttons with gradients
- Enhanced cards and modals
- Beautiful forms and inputs
- Progress bars and badges
- Alerts and notifications
- Tables with sorting/filtering

## 🚀 Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Customization for New Projects

1. **Update project info** in `src/config/template.js`
2. **Customize colors** in `src/config/bootstrap.js`
3. **Modify menu items** in `src/App.vue`
4. **Add your API endpoints** in `src/api/`
5. **Create new stores** in `src/stores/`
6. **Add new pages** in `src/views/`
7. **Update routes** in `src/router/index.js`

## 📦 Dependencies

### Core
- Vue 3 - Progressive JavaScript framework
- Vue Router 4 - Official router
- Pinia - State management
- Vite - Build tool

### UI & Styling
- Bootstrap 5 - CSS framework
- Font Awesome - Icons
- SweetAlert2 - Beautiful alerts

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💡 Tips

- Use the configuration files to quickly adapt the template
- Check out the Components page for UI examples
- Leverage the utility functions in `src/utils/`
- Follow the existing patterns for consistency
- Use the custom CSS classes for enhanced styling

## 🐛 Troubleshooting

### Common Issues

1. **Login not working**: Check console for API errors
2. **Styles not loading**: Ensure CSS imports are correct
3. **Routes not found**: Check router configuration
4. **Store not working**: Verify Pinia setup in main.js

### Support

Create an issue in the repository for bug reports or feature requests.

---

🎉 **Happy coding!** This template provides a solid foundation for building modern Vue 3 dashboard applications.
