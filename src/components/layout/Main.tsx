
import background from './background.svg'

const Main = (props: any) => {
    return (
        <>
            <div
                className="flex items-start min-h-screen items-center flex-col bg-indigo-100"
                style={{ backgroundImage: `url(${background})` }}
            >

                {props.children}


            </div>
        </>
    )
}

export default Main;