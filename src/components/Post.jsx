import { Popover } from "@headlessui/react";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex items-start py-3 px-4 cursor-pointer border-b border-[#2f3336]">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={post.postUser.avatar}
        alt=""
      />
      <div className="w-full">
        <div className="flex items-center">
          <span className="font-bold flex items-center bg">
            {post.postUser.username}
            {post.postUser.verified && (
              <svg
                fill="#1D9BF0"
                viewBox="0 0 22 22"
                aria-label="Verified account"
                role="img"
                className="w-4 h-4 bg-transparent flex-shrink-0"
              >
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
              </svg>
            )}
          </span>

          <span className="text-[15px] text-[#71767b] ml-1">
            @{post.postUser.fullName}
          </span>

          <span className="text-[15px] text-[#71767b] ml-1 mx-2">·</span>
          <span className="text-[15px] text-[#71767b] decoration-slice hover:underline">
            {post.postTime}h
          </span>
        </div>
        <div className="">
          <h1 className="text-[15px]">{post.postTitle}</h1>
          {post.postImage && (
            <img
              className="w-[516px] h-[516px] mt-4 rounded-md"
              src={post.postImage}
            />
          )}
          {post.postVideo && (
            <video
              width={516}
              height={290}
              controls
              className="mt-4 rounded-md"
            >
              <source src={post.postVideo} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
            </svg>
            <span className="text-[#71767b] text-[13px] ">
              {post.postActions.comment}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
            </svg>
            <span className="text-[#71767b] text-[13px] ">
              {post.postActions.repost}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
            </svg>
            <span className="text-[#71767b] text-[13px] ">
              {post.postActions.like}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
            </svg>
            <span className="text-[#71767b] text-[13px] ">
              {post.postActions.view}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="#71767b"
              width={16}
              height={16}
              className="bg-transparent"
            >
              <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
            </svg>
          </div>
        </div>
      </div>
      <Popover className="bg-transparent relative">
        <Popover.Button className="outline-none">
          <button className="outline-none mt-1 cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full bg-transparent hover:bg-[#1d9bf01a] transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="#71767b" // Normalde gri rengi
              width={20}
              height={20}
              className="bg-transparent hover:fill-[#1d9bf0]" // Sadece hover ile tetiklenecek
            >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </button>
        </Popover.Button>
        <Popover.Panel
          className="w-[370px] absolute top-0 right-0 z-[10000] rounded-lg"
          style={{ boxShadow: "0px 1px 6px rgba(250, 250, 250, 250)" }}
        >
          <div className="flex flex-col w-full rounded-xl">
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4 px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path>
              </svg>
              Not interested in this post
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"></path>
              </svg>
              Follow @{post.postUser.fullName}
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm4 7c-1.84 0-3.32.65-4.4 1.81-.93.98-1.61 2.39-1.95 4.19h5.85v2H3.4l.1-1.1c.27-2.66 1.16-4.88 2.64-6.46C7.63 11.85 9.65 11 12 11c.91 0 1.78.13 2.58.38l-.9 1.82c-.52-.13-1.08-.2-1.68-.2zm5-2l1.76 3.57 3.95.58-2.86 2.78.68 3.92L17 20l-3.53 1.85.68-3.92-2.86-2.78 3.95-.58L17 11z"></path>
              </svg>
              Subscribe to @{post.postUser.fullName}
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
              </svg>
              Add/remove @{post.postUser.fullName} from Lists
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"></path>
              </svg>
              Mute @{post.postUser.fullName}
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path>
              </svg>
              Block @{post.postUser.fullName}
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
              </svg>
              View post engagements
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"></path>
              </svg>
              Embed post
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path>
              </svg>
              Report post
            </div>
            <div className="font-bold text-[15px] leading-5 rounded-xl h-[44px] py-2 flex items-center w-full gap-4  px-4 hover:bg-white/[0.03]">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                <path d="M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5v-1.63l-1.15-.37H4.5C3.12 15.5 2 14.38 2 13v-3c0-1.38 1.12-2.5 2.5-2.5h2.35L22 2.63zM6 9.5H4.5c-.27 0-.5.22-.5.5v3c0 .28.23.5.5.5H6v-4zm2 4.27l12 3.86V5.37L8 9.23v4.54zm2 2.74v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97z"></path>
              </svg>
              Request Community Note
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Post;
