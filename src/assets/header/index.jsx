import "../header/index.css"
import Button from "../button"

export default function Header() {
  return (
    <>
    <div className="header">
        <div className="logo__nav">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Gallery</li>
                    <li>About</li>
                    <Button text="Contact"></Button>
                </ul>
            </div>
        </div>
        <div className="btn">
            <Button text="Get Started"></Button>
        </div>
    </div>
    </>
  )
}
