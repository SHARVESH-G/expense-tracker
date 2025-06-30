export const validateEmail=(email)=>{
    const emailVaidator  =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailVaidator.test(email);
};