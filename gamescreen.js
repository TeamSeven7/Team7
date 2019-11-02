var canvas = document.createElement("canvas"); // creation of a canvas.
        b = canvas.getContext("2d");
        
        canvas.width = 700;
        canvas.height = 500;

        document.body.appendChild(canvas);
        

        b.fillStyle = "black";
        b.fillRect(0, 0, canvas.width, canvas.height);

        var posX = 350;
        posY = 250;
        dx = 0;
        dy = 0;

        setInterval(function () {
            b.fillStyle = "black";// this is the world where the player is playing.
            b.fillRect(0, 0, canvas.width, canvas.height);
            posX += dx;
            posY += dy;

            if (posX > 390) {
                dx = 0;
                posX = 390;
            }

            if (posX < 0) {
                dx = 0;
                posX = 0;
            }

            if (posY > 390) {
                dy = 0;
                posY = 390;
            }

            if (posY < 0) {
                dy = 0;
                posY = 0;
            }

        b.fillStyle = "Magenta";// This is the player/rectangle.
        b.fillRect(posX, posY, 10, 10);
        }, 20)

        window.addEventListener("keydown", press001, true);// when Down arrow is pressed.
        function press001(event) {
            switch (event.keyCode) {
                case 37: //Left Button
                    dx = -1;
                    dy = 0;
                    break;

                case 38: // Up Button
                    dx = 0;
                    dy = -1;
                    break;

                case 39:// Right Button
                    dx = 1;
                    dy = 0;
                    break;

                case 40:// down button
                    dx = 0;
                    dy = 1;
                    break;

                case 80: //pause the game.
                    dx = 0;
                    dy = 0;
                    break;
            }
        }