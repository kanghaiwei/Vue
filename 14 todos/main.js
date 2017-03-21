var list=[
/*	{
		title:'吃饭'
	},
	{
		title:'睡觉'
	},
	{
		title:'打豆豆'
	},*/
];
new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'',

	},
	methods:{
		addLi(e){   //添加任务
			//向list中添加一项任务
			/*
			{
				title:
			}
			*/
			//事件处理函数中的this指向当前这个根实例
			this.list.push({
				title:this.todo
			});
			this.todo='';
		},
	}
});