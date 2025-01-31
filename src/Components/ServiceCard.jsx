// export default function ServiceCard({ title, description, image, link }) {
//   return (
//     <div
//       onClick={() => (window.location.href = link)}
//       className="block w-full max-w-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
//     >
//       <div
//         className="flex items-center gap-6 p-6 rounded-[16px] h-[160px]"
//         style={{
//           background: "linear-gradient(to right, #31A431, #70BC56)",
//         }}
//       >
//         <div className="flex-shrink-0">
//           <img src={image || "/placeholder.svg"} alt={title} className="w-32 h-32 object-cover" />
//         </div>
//         <div className="flex flex-col text-white h-full justify-between">
//           <div>
//             <h3 className="text-2xl font-bold font-poppins mb-1">{title}</h3>
//             <p className="text-base font-normal font-poppins">{description}</p>
//           </div>
//           <span className="text-sm font-medium font-poppins">Ver Mais</span>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div
      onClick={() => (window.location.href = link)}
      className="block w-full max-w-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
    >
      <div
        className="flex items-center gap-6 p-6 rounded-[16px] h-[160px]"
        style={{
          background: "linear-gradient(to right, #31A431, #70BC56)",
        }}
      >
        <div className="flex-shrink-0">
          <img src={image || "/placeholder.svg"} alt={title} className="w-32 h-32 object-cover" />
        </div>
        <div className="flex flex-col text-white h-full justify-between">
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-1">{title}</h3>
            <p className="text-base font-normal font-poppins">{description}</p>
          </div>
          <span className="text-sm font-medium font-poppins">Ver Mais</span>
        </div>
      </div>
    </div>
  )
}

