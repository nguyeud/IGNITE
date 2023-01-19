interface ContainerProps {
    version: string;
}

const VersionContainer: React.FC<ContainerProps> = ({version}) => {
    return (
        <div className="container-text">
            <p className="text-info">
                <b>Version</b> {version}
            </p>
        </div>
    );
};

export default VersionContainer;