// // deep
// import Image from 'next/image';     
// import Link from 'next/link';

// const WhoWeAre = () => {
//   return (
//     <main className="relative min-h-screen">
//       {/* Hero Section */}
//       <div className="relative h-screen w-full">
//         {/* Background Image/Video */}
//         <div className="absolute inset-0 z-[-1] max-w-[100vw]">
//           <Image
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAFoCAQAAABtO4LaAAADB3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZZbchwhDEX/WUWWgCSExHJ4VmUHWX4u/Zh4xnZVKs6nm2rECBBCR9AT5q+fK/zAQ5o8JDXPJeeIJ5VUuKLh8XzqUVNMR3086OJL+6QP2a8mQwqkXBPyKenWXxNuSRUtfWPI+9XRnjtKOiX7i6FrIdkebd/GZahchoTPDroM1HNbMRe3t1to85TX/DMMeMOuxM5930ZefydD9IZCKcxTSCJqFj4dkP1SkIoOQr0HwW8paLNk1HIMpTMgH8UpvvEqvFJ5tF6olLv3BYrkc0SA4jmY+SE/1JN+HPxwhPjNytIf6fCk7zWm1+3c71rDw1rz3F1NGSHN16buLR4tDGwIuRzTMorhVbTtKAXFA7K3g86IPTaUToUYWBYlGlRp0Txkpw4XE082SOYOUFvnYly4SwwglnahxQZiQxzMOvAKtPzwhY51y7FcJ8fCgzCSCcZop0LY1f8onxpaa6c80Q5mOWMFv3hnFtzY5HaNUUBA684jPQJ8l9dncxUw0yPMDrs1ttNEU7pya+eRHKAFAxXyhEw2LgMIEdZWOIMTkChmEqVM0ZiNCHF08Kkw5CyJGxCQKg94yUkkA47zXhtzjI6xrHyqcWcBhOIYGdDgSIFVwsWG/LHkyKGqoklVs5q6Fq1Zcsqac7a8L79qYsnUspm5Fasunlw9u7kHL14LF8HlqCUXK15KqRWLVliumF0xoNbGTVpq2nKz5q202pE+PXXtuVv30Euvg4cM3BMjDxs+yqiTJlJppqkzT5s+y6wLqbZkpaUrL1u+yqoPahROrO/K31OjmxofpPZAe1DDVLPbBO3rRDczEONEIG6bABKaN7PolBKHjW4zi4VxKpThpW44gzYxEEyTWBc92P0h98QtpPQlbnyTCxvd/yAXNrpPyL3n9gG1sb82PUo4CO1juIMaBcdvxTqwRWl9ZFMuS2kk3DEyRp+jVS37ICOu+EBgruVaS9KwPzlKSb8qvw19G/o29G3o3yX+SowSfgPF8ZvIoUJMsgAAASRpQ0NQSUNDIHByb2ZpbGUAAHicnZC/SsNQFMZ/jaJF66Q4iEMG14KLmVz8g8GhUNsKVqf0JsViEkOSUnwD38Q+TAdB8A18AQVnvxsdHMzihcP343DO9917wXFjkxTL+5CkZe73joZXw2t39Y11HJq0aAWmyDr9swG15/OVhtWXtvWqn/vzrIRRYaQLVWqyvITGodiblZllFVt3g96J+FHshkkaiufivTAJLdvdXhJPzY+nvU0rSi/7tq/axeecDl1cRkyZEFPSlqbqnOJxIPXJCXigwEhjIvVmmim5FRVy8jkWDUS6TU3eTpXXVcpIHhN52YR7EnnaPOz/fq99XFSbje1FFuRB1VpSOeMxvD/BxhA2n2Htpiar+fttNTNeNfPPN34BnHJQP+7zwN4AABB7aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NjRiY2E2NzMtMmQ2MC00NTdiLWI4NjAtMTM2ZTIzMzNhYWEzIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2NzM4OTNhLTg1NjUtNGFkMS05ZmIzLTgyYWYwYTRmZWFkNCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFjY2UzMjQyLWFiNTgtNGNjNC1hYmU5LTgwYjY0MzhiMjYzYSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MzU4NDE1OTIzNjg1ODgiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjJhYWQyOTQtZmM5Ny00ZjIyLTlmODEtNzI1MjliMTExNjU3IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTEwLTI5VDE1OjUzOjU2Ii8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1MjM2Yjg2LTJjMTMtNDZlMy1iMTc4LWNlYjQ4OWJmZmEzZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0xMS0wMlQwOToyNjozMiIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5vDLvrAAAAAmJLR0QAElk0UnoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflCwIIGiDS1FKgAAAB4klEQVR42u3UMQEAIAzAsA7/nocMDhIJPTpb1QTwmyMBYIAABggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8M4F4v0BCJrPG5QAAAAASUVORK5CYII="
//             alt="Placeholder"
//             layout="fill"
//             objectFit="cover"
//             className="absolute z-[-1] p-2.5 max-w-full left-0 top-0"
//           />
//         </div>

//         <div className="flex flex-col justify-center items-center h-full text-center px-4">
//           <div className="mb-8">
//             <Image
//               src="//images.ctfassets.net/oggad6svuzkv/2WMNPzf7IPR1Vov5ZxVHtc/2952309fc5776587200c1c4b67d99daa/Read_Light_Blue.svg"
//               alt=""
//               width={64}
//               height={64}
//             />
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Who we are<span className="text-[#02a1e2]">.</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl mb-6">Making every day more than ordinary</p>
          
//           <div className="max-w-2xl mx-auto">
//             <p className="text-lg">
//               Our brands are trusted in millions of living rooms, kitchens, laundry rooms, and bathrooms—and have been passed down from generation to generation. We are the people behind the brands you trust, and we're committed to making peoples' lives better in small but meaningful ways, every day.
//             </p>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <div className="mouse-scroll">
//             <div className="mouse-scroll__wheel"></div>
//           </div>
//         </div>
//       </div>

//       {/* What We Do Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="mb-12">
//           <p>
//             As P&G grows, we stay grounded in our <Link href="/policies-and-practices/purpose-values-and-principles/" className="text-blue-600 hover:underline">purpose, values, and principles</Link> and a deep-rooted understanding between each other and our company that being our best and doing our best—for the people who buy our products, for one another, and for the world around us—will lead to mutual success.
//           </p>
//         </div>
        
//         <div className="mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#003DA5]">
//             We believe in finding small but meaningful ways to improve lives—now and for generations to come.
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4">
//               <Image
//                 src="//images.ctfassets.net/oggad6svuzkv/5knYdiyBeWdLKYPkoRKUbC/cf1a07be9e700970cb499bc6d9bc66d1/Brands_Blue_-_animated.svg"
//                 alt=""
//                 width={120}
//                 height={120}
//               />
//             </div>
//             <p className="mb-4">We make superior quality products</p>
//             <Link href="/brands/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//               See our brands
//             </Link>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4">
//               <Image
//                 src="//images.ctfassets.net/oggad6svuzkv/6OZlma6iwl3YCtEZJDYgNf/fe4b93cdade459f6cf8c392e246916eb/Making_a_difference_Red_-_animated.svg"
//                 alt=""
//                 width={120}
//                 height={120}
//               />
//             </div>
//             <p className="mb-4">And use every ounce of our power to make a difference</p>
//             <Link href="/community-impact/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//               See our impact
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Equality Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="flex justify-center mb-8">
//           {/* <Image
//             src="//images.ctfassets.net/oggad6svuzkv/by9FteKPfnOB3DhpbkjMJ/2d45cebba397f7ad538217d7119f4214/pg_plus_me_logo.jpg?q=90"
//             alt="P&G + me = MUTUAL SUCCESS"
//             width={650}
//             height={260}
//           /> */}
//         </div>

//         <div className="text-left max-w-4xl mx-auto">
//           <p className="font-medium mb-4">
//             There is no single equation for success at P&G, because no two P&G people or careers are alike. Just as we strive to deliver a superior consumer experience, we aim to deliver a superior employee value equation as well.
//           </p>
//           <p className="font-medium mb-4">
//             We celebrate the uniqueness of each employee's journey because we know that loyalty and success stem from the times when people feel <b>inspired</b> to make a difference, have equal opportunity and multiple ways to continue <b>growing</b>, feel pride in <b>making an impact</b> and know they're being <b>valued and rewarded</b> for their contributions to their team's and our company's success.
//           </p>
//           <p className="font-medium">
//             We believe when we support our employees' wellbeing, they are better able to contribute to the success of the Company and achieve their personal goals. That is why <a href="https://www.pgcareers.com/global/en/benefits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">P&G's Total Rewards package</a> is focused on supporting four key wellbeing areas: financial, mental, physical and work-life wellbeing.
//           </p>
//         </div>

//         <div className="mt-16 max-w-4xl mx-auto">
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe 
//               className="w-full h-[400px]"
//               src="https://www.youtube-nocookie.com/embed/iOE_vJX4ANw"
//               title="P&G + Me = Mutual Success | P&G Stories"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Employee Stories */}
//       <div className="bg-[#f2f7ff] py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl mb-4">
//               Hear from a few employees who have shared their story on why they work at P&G.
//             </h2>
//           </div>

//           {/* Video Carousel */}
//           <div className="mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {/* Video 1 */}
//               <div>
//                 <div className="aspect-w-16 aspect-h-9 mb-4">
//                   <iframe 
//                     className="w-full h-full"
//                     src="https://www.youtube-nocookie.com/embed/VeK6bZ6C9J4"
//                     title="P&G + Me = Mutual Success | Archie Riva"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <h3 className="font-bold">Archie Riva</h3>
//               </div>

//               {/* Video 2 */}
//               <div>
//                 <div className="aspect-w-16 aspect-h-9 mb-4">
//                   <iframe 
//                     className="w-full h-full"
//                     src="https://www.youtube-nocookie.com/embed/WWzjYZ_B3yg"
//                     title="P&G + Me = Mutual Success | Dr. Ashley Taylor"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <h3 className="font-bold">Dr. Ashley Taylor</h3>
//               </div>

//               {/* Video 3 */}
//               <div>
//                 <div className="aspect-w-16 aspect-h-9 mb-4">
//                   <iframe 
//                     className="w-full h-full"
//                     src="https://www.youtube-nocookie.com/embed/JzUPRtilyaU"
//                     title="P&G + Me = Mutual Success | Louie Morante"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <h3 className="font-bold">Louie Morante</h3>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mb-8">
//             <h3 className="text-2xl text-[#003da5] font-semibold mb-2">Like what you're hearing?</h3>
//             <p className="max-w-2xl mx-auto">
//               If you share our values, you should join the P&G team. We're always looking for forward-thinkers.
//             </p>
//           </div>

//           <div className="text-center">
//             <a 
//               href="https://www.pgcareers.com/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//             >
//               Careers
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Heritage Feature */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <div className="md:w-1/2">
//             {/* <Image
//               src="//images.ctfassets.net/oggad6svuzkv/3UgHmSaYK4iaWA8Eye8W6i/1c92e71fbca67880f0f353332c4c1c99/1880s_Bartlett_Store__1___1_.jpg?q=90"
//               alt="1880s Bartlett Store"
//               width={600}
//               height={600}
//               className="rounded-lg"
//             /> */}
//           </div>
//           <div className="md:w-1/2">
//             <h2 className="text-3xl font-bold mb-6"><span>Heritage</span></h2>
//             <div className="mb-6">
//               <p>
//                 For more than 185 years, we've challenged the norm and inspired the future—from the products we put on the shelf to the people we bring on our team.
//               </p>
//             </div>
//             <Link href="/pg-history/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-block">
//               Learn more
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Feature */}
//       <section className="py-16 px-4 bg-[#f2f7ff]">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
//           <div className="md:w-1/2">
//             {/* <Image
//               src="//images.ctfassets.net/oggad6svuzkv/4Gxwejg9zayLu9GRLgLWqp/8464da72e88d60c2fbd7371fffb96101/Jon_Moeller.png?fm=webp&q=90"
//               alt="Jon Moeller"
//               width={600}
//               height={600}
//               className="rounded-lg"
//             /> */}
//           </div>
//           <div className="md:w-1/2">
//             <h2 className="text-3xl font-bold mb-6"><span>Leadership</span></h2>
//             <div className="mb-6">
//               <p>
//                 Our leadership approach is distinctly P&G. We set a clear, rigorous course for developing leaders and growth in every business and region, at every level. As a result, our diverse leadership team is shaping our future with an extensive range of knowledge, experience, and expertise to improve consumers' lives today and into the future.
//               </p>
//             </div>
//             <Link href="/leadership-team/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-block">
//               See more
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Blog Module */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">Learn about our latest efforts</h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {/* Blog Item 1 */}
//           <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//             <Link href="/blogs/deutsche-bank-2025/">
//               <div className="p-4">
//                 <div className="mb-4">
//                   <Image
//                     src="//images.ctfassets.net/oggad6svuzkv/4Xrg56s2rgUWt1K25JCFe9/dc821311eef6e1fffd318d7c75cf0fe2/PG_Logo_RGB_SVG_.svg"
//                     alt="P&G Logo"
//                     width={300}
//                     height={300}
//                   />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2">6/5/2025</p>
//                 <h3 className="font-bold mb-2">Fueling Growth and Value Creation through Productivity</h3>
//                 <p className="text-sm mb-4">Highlights from 2025 Deutsche Bank Global Consumer Conference.</p>
//                 <p className="text-blue-600 font-medium">Read more</p>
//               </div>
//             </Link>
//           </div>

//           {/* Blog Item 2 */}
//           <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//             <Link href="/blogs/pg-earnings-third-quarter-2025/">
//               <div className="p-4">
//                 <div className="mb-4">
//                   <Image
//                     src="//images.ctfassets.net/oggad6svuzkv/4Xrg56s2rgUWt1K25JCFe9/dc821311eef6e1fffd318d7c75cf0fe2/PG_Logo_RGB_SVG_.svg"
//                     alt="P&G Logo"
//                     width={300}
//                     height={300}
//                   />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2">4/25/2025</p>
//                 <h3 className="font-bold mb-2">P&G Announces Results for the Third Quarter of Fiscal Year 2025</h3>
//                 <p className="text-sm mb-4">P&G reported results for the third quarter of fiscal 2025.</p>
//                 <p className="text-blue-600 font-medium">Read more</p>
//               </div>
//             </Link>
//           </div>

//           {/* Blog Item 3 */}
//           <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//             <Link href="/blogs/earth-month/">
//               <div className="p-4">
//                 <div className="mb-4">
//                   {/* <Image
//                     src="//images.ctfassets.net/oggad6svuzkv/6iRQzIgbRS21lejQQxujAu/323d9211a70c04990d1cf3d10ca6ead6/pg_its_our_home_icon.png?fm=webp&q=90"
//                     alt="Earth illustration"
//                     width={300}
//                     height={300}
//                   /> */}
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2">4/5/2025</p>
//                 <h3 className="font-bold mb-2">What's the Key to a Winning Sustainability Strategy? Integration.</h3>
//                 <p className="text-sm mb-4">Learn how P&G embeds sustainability into our company's business strategy.</p>
//                 <p className="text-blue-600 font-medium">Read more</p>
//               </div>
//             </Link>
//           </div>

//           {/* Blog Item 4 */}
//           <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
//             <Link href="/blogs/monica-turner-ey-strategic-forum/">
//               <div className="p-4">
//                 <div className="mb-4">
//                   {/* <Image
//                     src="//images.ctfassets.net/oggad6svuzkv/y6wbpdaDIDAP9Y7yakjNF/dc287d08a241c6046eb56f95bb99a5ba/Monica_turner_EY_strategic_forum.png?fm=webp&q=90"
//                     alt="Monica Turner at EY Strategic Forum"
//                     width={300}
//                     height={300}
//                   /> */}
//                 </div>
//                 <p className="text-sm text-gray-500 mb-2">3/21/2025</p>
//                 <h3 className="font-bold mb-2">Monica Turner Shares 3 Tips for Building an Innovative Culture</h3>
//                 <p className="text-sm mb-4">At the 2024 EY Strategic Forum, P&G North America President Monica Turner shared how P&G is creating an innovative and entrepreneurial culture by attracting and developing talent.</p>
//                 <p className="text-blue-600 font-medium">Read more</p>
//               </div>
//             </Link>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link href="/blogs/#filter=company-news" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition inline-block">
//             View All
//           </Link>
//         </div>
//       </section>

//       {/* Cross Link List */}
//       <section className="py-16 px-4 bg-[#003da5] text-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Get to know us a bit better</h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Cross Link 1 */}
//                         {/* Cross Link 1 */}
//                         <Link href="/gender-equality/" className="group">
//                           <div className="mb-4">
//                             {/* <Image
//                               src="//images.ctfassets.net/oggad6svuzkv/5vR4yDt7h4ql0FhsFJTw8C/d0ab3484435c4474e7cf9e29388483a2/cross_link_gender_equality.png?fm=webp&q=90"
//                               alt="Gender Equality"
//                               width={400}
//                               height={400}
//                               className="rounded-lg group-hover:opacity-90 transition"
//                             /> */}
//                           </div>
//                           <p className="text-center font-medium flex items-center justify-center">
//                             <span>Gender Equality</span>
//                             <span className="ml-2 transform group-hover:translate-x-1 transition">
//                               <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
//                                 <path fill="#fff" d="M12.6 0L10.5 2.1 14.3 5.9 0 5.8 0 8.8 14.1 8.9 10.6 12.4 12.7 14.6 19.9 7.3z"></path>
//                               </svg>
//                             </span>
//                           </p>
//                         </Link>
            
//                         {/* Cross Link 2 */}
//                         <Link href="/ingredients/" className="group">
//                           <div className="mb-4">
//                             {/* <Image
//                               src="//images.ctfassets.net/oggad6svuzkv/C1HlrTpOSJ1eYYAToZa4a/1d3b48202f7a0274787e28e35631e130/1.11.23_Ingredients_Page_Key_Image_Option_4.png?fm=webp&q=90"
//                               alt="Ingredients"
//                               width={400}
//                               height={400}
//                               className="rounded-lg group-hover:opacity-90 transition"
//                             /> */}
//                           </div>
//                           <p className="text-center font-medium flex items-center justify-center">
//                             <span>Explore which ingredients we select — and avoid</span>
//                             <span className="ml-2 transform group-hover:translate-x-1 transition">
//                               <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
//                                 <path fill="#fff" d="M12.6 0L10.5 2.1 14.3 5.9 0 5.8 0 8.8 14.1 8.9 10.6 12.4 12.7 14.6 19.9 7.3z"></path>
//                               </svg>
//                             </span>
//                           </p>
//                         </Link>
            
//                         {/* Cross Link 3 */}
//                         <Link href="/citizenship/" className="group">
//                           <div className="mb-4">
//                             {/* <Image
//                               src="//images.ctfassets.net/oggad6svuzkv/6v6kQw7v8kK8w8v8kK8w8v/1d3b48202f7a0274787e28e35631e130/citizenship_image.png?fm=webp&q=90"
//                               alt="Citizenship"
//                               width={400}
//                               height={400}
//                               className="rounded-lg group-hover:opacity-90 transition"
//                             /> */}
//                           </div>
//                           <p className="text-center font-medium flex items-center justify-center">
//                             <span>See how we’re making a difference as a corporate citizen</span>
//                             <span className="ml-2 transform group-hover:translate-x-1 transition">
//                               <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
//                                 <path fill="#fff" d="M12.6 0L10.5 2.1 14.3 5.9 0 5.8 0 8.8 14.1 8.9 10.6 12.4 12.7 14.6 19.9 7.3z"></path>
//                               </svg>
//                             </span>
//                           </p>
//                         </Link>
//                       </div>
//                     </div>
//                   </section>
//                 </main>
//               );
//             };
            
//             export default WhoWeAre;










// // vercel




