const TiledContainer = (props: any) => {

    return (
        <div className='flex flex-wrap '>
            {props.children}
        </div>
    )
}

export default TiledContainer