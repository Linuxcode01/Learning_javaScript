import "./Slider.css";

const Slider = () => {
  const img = [
    "https://images.unsplash.com/photo-1716883269056-6737e8faaa3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1669842613532-1f0947aa6fa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1724765852136-254de61a0a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724699174715-ac3751fe8995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  ];

//   const Next = () => {
//     for (let i = 0; i < img.length; i++) {
//         console.log(img[i]);
//         if(i >= img.length){
//             i = 0;
//         }
        
//     }
//   };

//   const prev = () => {
//     for (let i = 0; i < img.length; i++) {
//         if(i <=0){
//             i = img.length - 1;
//         }
        
//     }
//   };

console.log(img[0]);

  return (
    <div className="slider">
      {console.log("hii")}
        
        
          <img className="img" src={img[0]} alt="alt" />
          <button >Next</button>
          <button>prev</button>
        
    
    </div>
  );
};

export default Slider;
