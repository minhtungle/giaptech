
import "/public/assets/css/vendor/fontawesome.css"
import "/public/assets/css/plugins/swiper.css"
import "/public/assets/css/plugins/cursor.css"
import "/public/assets/css/vendor/animate.min.css"
import "/public/assets/css/vendor/metismenu.css"
import "/public/assets/css/vendor/bootstrap.min.css"
import "/public/assets/css/style.css"
import 'aos/dist/aos.css';
import 'react-modal-video/css/modal-video.min.css';


export const metadata = {
  title: "Bizper - Consulting Business Home One",
  description: "Bizper - Consulting Business Home One",
  icons: {
    // icon: '/fav.png', // Path to your favicon inside the public folder
    // type: 'type="image/x-icon',
    icon: {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/fav.png',
      sizes: '16x16',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>
        
        {children}

      </body>


    </html>
  );
}
