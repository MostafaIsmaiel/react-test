type Props = {
    name: string;
};

const ChildComponent = (props: Props) => {
    const { name } = props;

    return <div>current name is: {name}</div>;
};

export default ChildComponent;
