import { Button, Navbar } from "flowbite-react";

export default function OurWork(){
    return (
        <div>
                     <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="h-24 w-24 mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DM Landscapers</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Our Work</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
        </div>
    )
}