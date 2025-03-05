function getButtonStyling(styleType){
    const primaryButtonStyling ="bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700  px-6 py-1 mx-3";
    const secondryButtonStyling ="bg-green-500 text-white font-bold rounded-md hover:bg-blue-700  px-6 py-1 mx-3";
    const warning ="bg-orange-500 text-white font-bold rounded-md hover:bg-blue-700 px-6 py-1 mx-3";
    const error ="bg-red-500 text-white font-bold rounded-md hover:bg-blue-700 px-6 py-1 mx-3"

if(styleType=="primary"){return primaryButtonStyling;}
else if(styleType=="secondry"){return secondryButtonStyling;}
else if(styleType=="warning"){return warning;}
else{return error}

}
export default getButtonStyling;