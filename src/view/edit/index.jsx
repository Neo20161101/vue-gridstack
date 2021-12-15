import { defineComponent,ref,reactive,onMounted } from 'vue';
// import { Button } from 'ant-design-vue';
import Store from '@/AppStore';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// 支持移动端触摸
// import 'gridstack/dist/jq/gridstack-dd-jqueryui';
import './style.less';
export default defineComponent({
    name: "edit",
    setup(props){
        const state = reactive({
            grid:{}
        });
        const data = reactive([{name:'1'},{name:'2'}])
        onMounted(()=>{
            console.log("edit,",Store);
            init();
        })
        const init = () => {
            const grid = GridStack.init({
                column: 12,
                cellHeight:30,
                minW:800,// 最小宽度
                maxRow:6, // 最大行数
                resizable:{autoHide:true,handles:'se'},// 可调整大小选项hover,handles:方向
                float:true,// true 不自动往上浮动
                margin: 1, // 边距
                dragOut:true,
                disableOneColumnMode:true,//当网格宽度小于 minW 时禁用 onColumnMode（默认值："false"）
                draggable:{handle: '.grid-stack-item-content', scroll: true, appendTo: 'body', containment: null},

            });
            grid.addWidget({w: 1, content: 'item 1'});
            grid.addWidget({w: 2, content: 'item 2'});
            state.grid = grid;
        }
        return ()=>(
            <div className='edit'>
                <div className="grid-stack"></div>
            </div>
        )
    },
})