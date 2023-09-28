import Node from "../../types/node.interface";

function RecursiveComponent({ node }: { node: Node }) {
    return (
        <div className="menu-item">
            <p className="menu-item-heading">{node.text}</p>
            {node.children?.map((child: Node, index: number) => (
                <RecursiveComponent key={index} node={child} />
            ))}
        </div>
    )
}

export default RecursiveComponent
