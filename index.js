class Views {
    constructor(name, genre) {
      this.name = name;
      this.genre = genre;
    }
    describe() {
      return `${this.name} is a ${this.genre}.`;
    }
  }
  
  class Videos {
    constructor(name) {
      this.name = name;
      this.Views = [];
    }
  
    addVideos(Views) {
      if (Views instanceof Views) {
        this.Views.push(Views);
      } else {
        throw new Error(
          `You can only add an instance of Views. Argument is not a view ${Views}`
        );
      }
    }
  
    describe() {
      return `${this.name} has ${this.Views.length} Views.`;
    }
  }
  
  class Menu {
    constructor() {
      this.Videos = [];
      this.selectedVideos = null;
    }
  
    start() {
      let selection = this.showMainMenuOptions();
      while (selection != 5) {
        switch (selection) {
          case "1":
            this.createVideos();
            break;
          case "2":
            this.viewVideos();
            break;
          case "3":
            this.deleteVideos();
            break;
          case "4":
            this.displayVideos();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
  
      alert("Goodbye!");
    }
  
    showMainMenuOptions() {
      return prompt(`
          1. Add New Videos
          2. View Videos
          3. Delete Videos
          4. Display all Videos
          5. Exit
          `);
    }
  
    showVideosMenuOptions(VideosInfo) {
      return prompt(`
          1. Add a subscriber
          2. Delete subscriber
          3. Go Back
          ---------------
          ${VideosInfo}
          `);
    }
  
    displayVideos() {
      let VideosString = "";
      for (let i = 0; i < this.Videos.length; i++) {
        VideosString += i + ". " + this.Videos[i].name + "\n";
      }
      alert(VideosString);
    }
  
    createVideos() {
      let name = prompt("Enter name for new Videos:");
      this.Videos.push(new Videos(name));
    }
  
    deleteVideos() {
      let index = prompt("Select a Videos to delete");
      if (index > -1 && index < this.Videos.length) {
        this.Videos.splice(index, 1);
      }
    }
  
    viewVideos() {
      let index = prompt("Enter the index of the Videos you wish to view: ");
      if (index > -1 && index < this.Videos.length) {
        this.selectedVideos = this.Videos[index];
        let description = "Videos Name: " + this.selectedVideos.name + "\n";
  
        for (let i = 0; i < this.selectedVideos.Views.length; i++) {
          description +=
            '             ' + i +
            ". " +
            this.selectedVideos.Views[i].name +
            " - " +
            this.selectedVideos.Views[i].genre +
            "\n";
        }
  
        let selection = this.showVideosMenuOptions(description);
        switch (selection) {
          case "1":
            this.createViews();
            break;
          case "2":
            this.deleteViews();
        }
      }
    }
    createViews() {
      let name = prompt("Enter a new video:");
      let genre = prompt("Enter a genre for video:");
      this.selectedVideos.Views.push(new Views(name, genre));
    }
  
    deleteViews() {
      let index = prompt("Select the videos you would like to delete:");
      if (index > -1 && index < this.selectedVideos.Views.length) {
        this.selectedVideos.Views.splice(index, 1);
      }
    }
  }
  
  let menu = new Menu();
  menu.start();