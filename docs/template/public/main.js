import WorkflowContainer from "./workflow.js"

export default {
    defaultTheme: 'auto',
    iconLinks: [{
        icon: 'github',
        href: 'https://github.com/banchan86/example_hub_playground',
        title: 'GitHub'
    }],
    start: () => {
        WorkflowContainer.init();
    }
}