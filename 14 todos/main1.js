var list=[
	{
		title:'chifan',
		isChecked:false,
	},
	{
		title:'chifan',
		isChecked:false,
	},
];
new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'',

	},
	computed:{

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
		}
	}
});