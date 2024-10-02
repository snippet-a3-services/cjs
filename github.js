console.log("🅲🅹🆂");
const url = window.location.href;
console.log(url);

const host = 'https://gitlab.com';
const root = host + '/';
const ide = host + '/-/ide/project/';

const patternPipelines = new RegExp(`^${root}([^/]+)/([^/]+)/([^/]+)/-+/pipelines$`);
const matchPipelines = url.match(patternPipelines);

if (matchPipelines) {
    console.log("🅲🅹🆂: pattern");
    const project = matchPipelines[1];
    const group = matchPipelines[2];
    const repo = matchPipelines[3];

    document.title = `🚀 ${repo}`;
    console.log(`Document title set to:🚀 ${repo}`);
}

if (url.startsWith(ide)) {
    console.log("🅲🅹🆂: ide");
    const restOfUrl = url.slice(ide.length);

    const parts = restOfUrl.split('/');

    if (parts.length >= 5) {
        const project = parts[0];  
        const group = parts[1];    
        const repo = parts[2];     
        const edit = parts[3];     
        const branch = parts[4];
        
        document.title = `✏️ ${repo} @ ${branch}`;
        console.log(`Project: ${project}`);
        console.log(`Group: ${group}`);
        console.log(`Repo: ${repo}`);
        console.log(`Edit: ${edit}`);
        console.log(`Branch: ${branch}`);
    } else if (parts.length >= 3) {
        const project = parts[0];  
        const group = parts[1];    
        const repo = parts[2];     
        //const edit = parts[3];     
        //const branch = parts[4];
        
        document.title = `✏️ ${repo}`;
        console.log(`Project: ${project}`);
        console.log(`Group: ${group}`);
        console.log(`Repo: ${repo}`);
        console.log(`Edit: ${edit}`);
        console.log(`Branch: ${branch}`);
    } else{
        console.log(`URL does not have enough parameters. ${parts.length}`);
    }
} else {
    console.log('URL does not start with https://gitlab.com/-/ide/project/');
}

console.log("🅲🅹🆂: FINISHED");
