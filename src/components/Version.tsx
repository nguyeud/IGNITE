interface VersionData {
    version: string;
}

const Version: React.FC<VersionData> = ({version}) => {
    return (
        <div className="container-text">
            <p className="text-info">
                <b>Version</b> {version}
            </p>
        </div>
    );
};

export default Version;