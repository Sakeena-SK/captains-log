const React = require('react')

function Index (props){
    const logs = props.logs
    return (
        <div>
        <h1>Index page</h1>
        <ul>
        {
            logs.map((log) => {
                return (<li>this is the <a href={`/logs/${log.id}`}>{log.title}</a>of the entry {log.entry}</li>)
            })

        }
        </ul>
        </div>
    )
}
module.exports = Index