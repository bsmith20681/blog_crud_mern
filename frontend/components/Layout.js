import Header from './Header'
import '../css/styles.css'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <footer>footer</footer>
    </React.Fragment>
  )
}
export default Layout;
