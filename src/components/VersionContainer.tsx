interface VersionData {
    version: string;
}

const VersionContainer: React.FC<VersionData> = ({version}) => {
    return (
        <div className="container-text">
            <p className="text-info">
                <b>Version</b> {version}
            </p>
        </div>
    );
};

export default VersionContainer;