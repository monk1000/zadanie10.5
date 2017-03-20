function Button(text) {
	this.text = text || 'Hello';
	
}

	Button.prototype = {
		create: function() {
				var self = this;

				this.$element = $('<button>');
				this.$element.text(this.text);
				this.$element.click(function() {
					alert(self.text);
				});
				this.$element.appendTo($('body'));
		}
		
	}

	var btn1 = new Button('love');
		btn2 = new Button('hate');

	btn1.create();
	btn2.create();



	