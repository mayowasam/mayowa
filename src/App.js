import { Routes, Route, useLocation } from 'react-router-dom'
import CustomCursorManager from './cursor/CursorContext';
// import CursorOrdinary from './cursor/CursorOrdinary/CursorOrdinary';
import CursorOrdinary from './cursor/CursorAdvanced/CursorAdvanced';
import  { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { useStateVal, SharedLayout, Shared, Loader, Home, About, Work, WorkInfo, NotFound, Contact } from './Paths'
import { AnimatePresence } from 'framer-motion'
// import Horizontal from './components/Horizontal'
// import LocomotiveScroll from "locomotive-scroll";




function App() {
  const { themeMode } = useStateVal()
  let location = useLocation()
  // let onceRef = useRef(false)



  // useEffect(() => {
  //   // if (!onceRef.current) return;
  //   const scroll = new LocomotiveScroll({

  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     multiplier: 1,
  //     // when the element gets in view i want to add/append  the "is-reveal"  
  //     //to the className of the one with a data-scroll attribute
  //     // class: "is-reveal" 
  //     tablet: {
  //       smooth: true
  //     },
  //     smartphone: {
  //       smooth: true
  //     }
  //   });
  //   return () => {
  //     if (scroll) scroll.destroy()
  //   }
  // }, []);

  // useEffect(() => {
  //   window.dispatchEvent(new Event('resize'))
  // },
  // [Component])


  return (

    <>

      <CustomCursorManager>
      <GlobalStyles />
      <ThemeProvider theme={themeMode}>
        <CursorOrdinary />

        <AnimatePresence initial={false} exitBeforeEnter>

          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SharedLayout />} >
              <Route index element={<Loader />} />

              <Route path="home" element={< Home />} />

              <Route path="about" element={< About />} />

              <Route path="work" element={<Shared />} >
                <Route index element={<Work />} />
                {/* <Route index element={<Horizontal />} /> */}
                <Route path=":id" element={<WorkInfo />} />

              </Route>
              <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            </Route>


          </Routes>
        </AnimatePresence>

      </ThemeProvider>


      </CustomCursorManager>
    </>
  );
}

export default App;
