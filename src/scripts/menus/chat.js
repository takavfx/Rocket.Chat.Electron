import { remote } from 'electron';
import { takeScreenshot } from 'electron-screencapture';

const chatTemplate = [
    {
        label: 'Screen Capture',
        submenu: [
            {
                label: 'Capture Window',
                accelerator: 'CommandOrControl+Shift+1'
            },
            {
                label: 'Capture Area',
                accelerator: 'CommandOrControl+Shift+2',
                click: function() {
                    takeScreenshot({x:0, y:0, width:800, height:600}).then(result=>{
                        console.log(result);
                    });
                }
            },
            {
                label: 'Capture Screen',
                accelerator: 'CommandOrControl+Shift+3',
            }
        ]
    }
];

export default chatTemplate;
