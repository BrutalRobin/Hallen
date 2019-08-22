# Hallen
Hallens hjemmeside

.team-area{
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin: 50px;
    padding: 10px;
}

.single-team{
    width: 560px;
    height: 400px;
    padding:25px; 
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: .6s ease-out;
    box-shadow: 0 10px 10px rgba(0,0,0,0.5)
}

.single-team:hover{
    transform: translateY(15px)
}

.single-team:hover:before{
    opacity: 1;
}

.single-team:hover .team-text{
    opacity: 1;
    transform: translateY(0);
}


.single-team:before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, #94cef2, transparent);
    z-index: 2;
    opacity: 0;
}

.single-team img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    object-fit: cover;
}


.single-team .team-text{
    position: relative;
    z-index: 3;
    color: #fff;
    opacity: 0;
    transform: translateY(60px);
    transition: 0.5s;
}

 .team-text h2{
    margin: 0;
    font-family: fantasy;
    /* letter-spacing: 3px; */
}

.team-text p{
    /* letter-spacing: 1px; */
    font-size: 15px;
    margin-top: 8px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
