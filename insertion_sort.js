function Insertion_algo()
{
    //Setting Time complexities
    document.getElementById("Worst").innerText="O(N^2)";
    document.getElementById("Average").innerText="Θ(N^2)";
    document.getElementById("Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("S_Worst").innerText="O(1)";

    delay_change=0;

    for(var j=0;j<array_size;j++)
    {
        update(divs[j],div_sizes[j],"yellow");

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            update(divs[i],div_sizes[i],"red");
            update(divs[i+1],div_sizes[i+1],"red");

            div_sizes[i+1]=div_sizes[i];

            update(divs[i],div_sizes[i],"red");//Height update
            update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            update(divs[i],div_sizes[i],"blue");
            if(i==(j-1))
            {
                update(divs[i+1],div_sizes[i+1],"yellow");
            }
            else
            {
                update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            update(divs[t],div_sizes[t],"green");
        }
    }
    update(divs[j-1],div_sizes[j-1],"green");

    enable_btns();
}
