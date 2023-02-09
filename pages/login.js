import { getProviders,signIn } from "next-auth/react";

function Login({providers }){
    return(
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
           <img
        className="w-52 mb-5"
        src="https://th.bing.com/th/id/R.fe4bfd3bd082e4fd4d6aca3f255925b1?rik=Hwa9QxFb3%2bIjtw&pid=ImgRaw&r=0"
        alt="images"
      />
    

    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-lg"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
    
  );
};
export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props:{
          providers
        },
    };
}

export default Login;

