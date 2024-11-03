import { Button, Navbar } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";


import './App.css';

function App() {
  return (
    <div className="flex flex-col">
         <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="mr-3 h-24 w-24 sm:h-9" alt="Flowbite React Logo" />
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
 <div className="h-screen">
      <Carousel>
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644004/IMG-20241103-WA0033_xvowin.jpg" alt="..." />
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0016_fupmda.jpg" alt="..." />
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0003_lt6xwd.jpg" alt="..." />
      </Carousel>
    </div>

    <div className="flex flex-row space-x-4 justify-center mt-20">
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/bn47/image/upload/v1730644004/IMG-20241103-WA0033_xvowin.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0016_fupmda.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0003_lt6xwd.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </div>
      <Button>This is Me!</Button>
    </div>
  );
}

export default App;
