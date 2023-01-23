interface VersionData {
    version: string;
}

const Version: React.FC<VersionData> = (props: VersionData) => {
    return (
        <div className="container-text">
            <p className="text-info">
                <b>Version</b> {props.version}
            </p>
        </div>
    );
};

export default Version;