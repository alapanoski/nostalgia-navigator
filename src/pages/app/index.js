import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"

import {
  AiOutlinePlus,
  AiOutlineCloseCircle,
  AiOutlineCamera,
} from "react-icons/ai"

import sampleImage from "../../assets/sample-photos/sample.jpg"
import sampleVideo from "../../assets/sample-video.jpg"

import sampleCameraCapture from "../../assets/sample-camera-capture.jpg"

const inter = Inter({ subsets: ["latin"] })

const images = [
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
  {
    image: "This will eventually be an image",
  },
]

const snaps = [
  {
    snap: "This will eventually be a snap",
  },
  {
    snap: "This will eventually be a snap",
  },
]

export default function Home() {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [isViewingImage, setIsViewingImage] = useState(false)

  const [username, setUsername] = useState("Allen")

  const videoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch((err) => {
        console.error("error:", err)
      })
  }

  // useEffect(() => {
  //   getVideo()
  // }, [videoRef])

  const paintToCanvas = () => {
    let video = videoRef.current
    let photo = photoRef.current
    let ctx = photo.getContext("2d")

    const width = 320
    const height = 240
    photo.width = width
    photo.height = height

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height)
    }, 200)
  }

  const imageList = [
    {
      imgUrl: "https://source.unsplash.com/random?school",
      date: new Date("2023-03-12T00:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?sky",
      date: new Date("2021-07-11T12:30:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?music",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?girl",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?boy",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?magic",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?music",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?music",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?student",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?music",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?college",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?bus",
      date: new Date("2022-03-07T14:20:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?car",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?music",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
    },
  ]

  return (
    <>
      <Head>
        <title>Snap A Day</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen flex flex-col items-center">
        <nav className="container fixed bg-primary rounded text-white px-10 w-full h-16 flex flex-row justify-between items-center">
          <h1 className="text-4xl">Snap A Day</h1>
          <div className="h-12 w-12 rounded-full flex justify-center items-center">
            {username}
          </div>
        </nav>

        <div className="mt-20 h-full">
          <div className="w-screen md:w-full py-10">
            <p className="text-3xl">Your Latest Memories</p>
          </div> 

          <div className="w-screen md:w-full flex flex-row justify-start items-center gap-2 shrink-0 overflow-x-scroll">
            {snaps.map((snap) => {
              return (
                <a className="w-40 h-72 border border-primary rounded-md flex justify-center items-center" href="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4">
                  <Image src={sampleVideo} />
                </a>
              )
            })}
          </div>

          <p className="text-3xl text-primary">Your Images</p>
          <div className="w-full p-4 flex flex-row justify-center md:justify-start items-center gap-1 md:gap-2 flex-wrap">
            {imageList.map((image) => {
              return (
                <div
                  className="w-24 h-24 md:w-32 md:h-32 bg-primary flex justify-center items-center overflow-hidden"
                  onClick={() => {
                    setIsViewingImage(true)
                  }}
                >
                  <Image src={image.imgUrl} width={2000} height={2000} />
                </div>
              )
            })}
          </div>

          <div
            className={
              (isCameraOpen ? "fixed" : "hidden") +
              " top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 h-4/5 w-4/5 bg-primary z-10 flex flex-col items-center justify-center"
            }
          >
            <button
              className="absolute top-0 right-0 p-4 text-5xl text-white"
              onClick={() => {
                setIsCameraOpen(false)
              }}
            >
              <AiOutlineCloseCircle />
            </button>
            <div className="h-4/5 flex justify-center items-center overflow-hidden">
              <Image src={sampleImage} width={3000} height={1000} />
            </div>
            <button className="absolute bottom-0 left-2/4 -translate-x-2/4 text-white text-6xl">
              <AiOutlineCamera />
            </button>
          </div>

          <div
            className={
              (isViewingImage ? "fixed" : "hidden") +
              " top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 h-4/5 w-4/5"
            }
          >
            <button
              className="absolute top-0 right-0 p-4 text-5xl text-primary"
              onClick={() => {
                setIsViewingImage(false)
              }}
            >
              <AiOutlineCloseCircle />
            </button>
            <div className="h-4/5 flex justify-center items-center overflow-hidden">
              <Image
                src={imageList[4].imgUrl}
                width={1000}
                height={500}
              />
            </div>
          </div>

          <button
            onClick={() => {
              setIsCameraOpen(true)
            }}
            className="fixed bottom-[10%] md:bottom-[15%] right-[10%] text-5xl bg-primary text-white p-2 rounded-full"
          >
            <AiOutlineCamera />
          </button>
        </div>
      </main>
    </>
  )
}
