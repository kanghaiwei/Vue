//存取localStorage的数据
var store={
	//保存数据
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));  //数组转成字符串的形式
	},
	//获取数据
	get(key){
		return JSON.parse( localStorage.getItem(key) )||[];  //没有取到的时候返回空的数组
	},
};


/*var list=[
	{
		title:'中文',
		isChecked:false,   //未选中，任务未完成
	},
	{
		title:'chifan',
		isChecked:true,  //选中，任务完成
	},
];*/
var list=store.get('LiText');
new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'',  //添加任务的文本内容
		editingLi:'',   //记录正在编辑的数据
		beforeTitle:'',   //记录编辑之前的内容
	},
	watch:{
		/*list:function(){    //浅监控，监控不到里面的isChecked是否发生变化，监控list属性，当属性对应的值发生变化的时候就执行函数
			store.save('LiText',this.list);
		}*/
		list:{
			handler:function(){   
				store.save('LiText',this.list);
			},
			deep:true,   //handler,deep为true深监控，能监控到对象里面的属性发生变化
		}
	},
	computed:{
		noCheckedLength:function(){
			return this.list.filter(function(item){
                    return !item.isChecked;
            }).length;
		}
	},
	methods:{
		addLi(e){
			if(this.todo){
				this.list.push({
					title:this.todo,
					isChecked:false,

				});
			}
			this.todo='';
		},
		deleteLi(li){
			var index=this.list.indexOf(li);
			this.list.splice(index,1);
		},
		editLi(li){   //编辑任务
			//console.log(li);  //get获取 set设置
			//编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
			this.editingLi=li;
			this.beforeTitle=li.title;
		},
		editEnd(li){   //编辑任务成功
			this.editingLi='';
		},
		cancelLi(li){    //取消编辑任务
			li.title=this.beforeTitle;

			this.editingLi='';

		},
	},
	directives:{
		'focus':{   //focus自定义指令的名字,随便定义,自动获取某一个input的焦点
			update(el,binding){   //钩子函数,el当前指令绑定的参数
				if(binding.value){    //表达式计算返回的结果
					el.focus();
				}
			}
		}
	},
});