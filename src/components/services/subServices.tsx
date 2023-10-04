import RenderIcon from "../common/renderIcon"

const Service = ({title, content}: {title: string; content: string}) => {
    return <div className="flex flex-col">
        <RenderIcon />
        <p>
            {title}
        </p>
        <p>
            {content}
        </p>
    </div>
}

const SubServices = ({subServices}) => {
    return <div className="flex">
        {subServices.map((service, index) => <Service {...service} />)}
    </div>
}

export default SubServices