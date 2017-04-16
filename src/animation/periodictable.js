var table = [
    "H", "Hydrogen", "1.00794", 1, 1,
    "He", "Helium", "4.002602", 18, 1,
    "Li", "Lithium", "6.941", 1, 2,
    "Be", "Beryllium", "9.012182", 2, 2,
    "B", "Boron", "10.811", 13, 2,
    "C", "Carbon", "12.0107", 14, 2,
    "N", "Nitrogen", "14.0067", 15, 2,
    "O", "Oxygen", "15.9994", 16, 2,
    "F", "Fluorine", "18.9984032", 17, 2,
    "Ne", "Neon", "20.1797", 18, 2,
    "Na", "Sodium", "22.98976...", 1, 3,
    "Mg", "Magnesium", "24.305", 2, 3,
    "Al", "Aluminium", "26.9815386", 13, 3,
    "Si", "Silicon", "28.0855", 14, 3,
    "P", "Phosphorus", "30.973762", 15, 3,
    "S", "Sulfur", "32.065", 16, 3,
    "Cl", "Chlorine", "35.453", 17, 3,
    "Ar", "Argon", "39.948", 18, 3,
    "K", "Potassium", "39.948", 1, 4,
    "Ca", "Calcium", "40.078", 2, 4,
    "Sc", "Scandium", "44.955912", 3, 4,
    "Ti", "Titanium", "47.867", 4, 4,
    "V", "Vanadium", "50.9415", 5, 4,
    "Cr", "Chromium", "51.9961", 6, 4,
    "Mn", "Manganese", "54.938045", 7, 4,
    "Fe", "Iron", "55.845", 8, 4,
    "Co", "Cobalt", "58.933195", 9, 4,
    "Ni", "Nickel", "58.6934", 10, 4,
    "Cu", "Copper", "63.546", 11, 4,
    "Zn", "Zinc", "65.38", 12, 4,
    "Ga", "Gallium", "69.723", 13, 4,
    "Ge", "Germanium", "72.63", 14, 4,
    "As", "Arsenic", "74.9216", 15, 4,
    "Se", "Selenium", "78.96", 16, 4,
    "Br", "Bromine", "79.904", 17, 4,
    "Kr", "Krypton", "83.798", 18, 4,
    "Rb", "Rubidium", "85.4678", 1, 5,
    "Sr", "Strontium", "87.62", 2, 5,
    "Y", "Yttrium", "88.90585", 3, 5,
    "Zr", "Zirconium", "91.224", 4, 5,
    "Nb", "Niobium", "92.90628", 5, 5,
    "Mo", "Molybdenum", "95.96", 6, 5,
    "Tc", "Technetium", "(98)", 7, 5,
    "Ru", "Ruthenium", "101.07", 8, 5,
    "Rh", "Rhodium", "102.9055", 9, 5,
    "Pd", "Palladium", "106.42", 10, 5,
    "Ag", "Silver", "107.8682", 11, 5,
    "Cd", "Cadmium", "112.411", 12, 5,
    "In", "Indium", "114.818", 13, 5,
    "Sn", "Tin", "118.71", 14, 5,
    "Sb", "Antimony", "121.76", 15, 5,
    "Te", "Tellurium", "127.6", 16, 5,
    "I", "Iodine", "126.90447", 17, 5,
    "Xe", "Xenon", "131.293", 18, 5,
    "Cs", "Caesium", "132.9054", 1, 6,
    "Ba", "Barium", "132.9054", 2, 6,
    "La", "Lanthanum", "138.90547", 4, 9,
    "Ce", "Cerium", "140.116", 5, 9,
    "Pr", "Praseodymium", "140.90765", 6, 9,
    "Nd", "Neodymium", "144.242", 7, 9,
    "Pm", "Promethium", "(145)", 8, 9,
    "Sm", "Samarium", "150.36", 9, 9,
    "Eu", "Europium", "151.964", 10, 9,
    "Gd", "Gadolinium", "157.25", 11, 9,
    "Tb", "Terbium", "158.92535", 12, 9,
    "Dy", "Dysprosium", "162.5", 13, 9,
    "Ho", "Holmium", "164.93032", 14, 9,
    "Er", "Erbium", "167.259", 15, 9,
    "Tm", "Thulium", "168.93421", 16, 9,
    "Yb", "Ytterbium", "173.054", 17, 9,
    "Lu", "Lutetium", "174.9668", 18, 9,
    "Hf", "Hafnium", "178.49", 4, 6,
    "Ta", "Tantalum", "180.94788", 5, 6,
    "W", "Tungsten", "183.84", 6, 6,
    "Re", "Rhenium", "186.207", 7, 6,
    "Os", "Osmium", "190.23", 8, 6,
    "Ir", "Iridium", "192.217", 9, 6,
    "Pt", "Platinum", "195.084", 10, 6,
    "Au", "Gold", "196.966569", 11, 6,
    "Hg", "Mercury", "200.59", 12, 6,
    "Tl", "Thallium", "204.3833", 13, 6,
    "Pb", "Lead", "207.2", 14, 6,
    "Bi", "Bismuth", "208.9804", 15, 6,
    "Po", "Polonium", "(209)", 16, 6,
    "At", "Astatine", "(210)", 17, 6,
    "Rn", "Radon", "(222)", 18, 6,
    "Fr", "Francium", "(223)", 1, 7,
    "Ra", "Radium", "(226)", 2, 7,
    "Ac", "Actinium", "(227)", 4, 10,
    "Th", "Thorium", "232.03806", 5, 10,
    "Pa", "Protactinium", "231.0588", 6, 10,
    "U", "Uranium", "238.02891", 7, 10,
    "Np", "Neptunium", "(237)", 8, 10,
    "Pu", "Plutonium", "(244)", 9, 10,
    "Am", "Americium", "(243)", 10, 10,
    "Cm", "Curium", "(247)", 11, 10,
    "Bk", "Berkelium", "(247)", 12, 10,
    "Cf", "Californium", "(251)", 13, 10,
    "Es", "Einstenium", "(252)", 14, 10,
    "Fm", "Fermium", "(257)", 15, 10,
    "Md", "Mendelevium", "(258)", 16, 10,
    "No", "Nobelium", "(259)", 17, 10,
    "Lr", "Lawrencium", "(262)", 18, 10,
    "Rf", "Rutherfordium", "(267)", 4, 7,
    "Db", "Dubnium", "(268)", 5, 7,
    "Sg", "Seaborgium", "(271)", 6, 7,
    "Bh", "Bohrium", "(272)", 7, 7,
    "Hs", "Hassium", "(270)", 8, 7,
    "Mt", "Meitnerium", "(276)", 9, 7,
    "Ds", "Darmstadium", "(281)", 10, 7,
    "Rg", "Roentgenium", "(280)", 11, 7,
    "Cn", "Copernicium", "(285)", 12, 7,
    "Uut", "Unutrium", "(284)", 13, 7,
    "Fl", "Flerovium", "(289)", 14, 7,
    "Uup", "Ununpentium", "(288)", 15, 7,
    "Lv", "Livermorium", "(293)", 16, 7,
    "Uus", "Ununseptium", "(294)", 17, 7,
    "Uuo", "Ununoctium", "(294)", 18, 7
];

export default {
    init(domStr, options) {
        this.box = document.querySelector(domStr);
        this.target = {
            doms: document.createDocumentFragment(), 
            table: [],
            sphere: []
        }
        this.opts = Object.assign({
            z: '-12px'
        }, options);
        this.initDoms();
    },

    initDoms() {
        let x0 = 0, y0 = 0, z0 = 0, transTypes = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'];

        for (let i = 0, len = table.length; i < len; i+=5) {
            let div = document.createElement('DIV');
            div.className = 'element';
            div.textContent = table[i];
            div.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

            x0 = Math.floor(Math.random() * 3200) + 100 + 'px';
            y0 = Math.floor(Math.random() * 2000) + 100 + 'px';
            z0 = -Math.floor(Math.random() * 20 + 5) + 'px';
            
            this.setTransition(div, (2 + Math.random()) + 's', transTypes[Math.floor(Math.random() * 5)]);
            this.setTransform(div, {
                x: x0, 
                y: y0,
                z: z0
            });
            this.target.doms && this.target.doms.appendChild(div);

            // table
            let col = table[i+3], row = table[i+4];
            this.initTablePos(col, row);
        }
        this.initSphere();
        this.box.appendChild(this.target.doms);
    },

    initTablePos(col, row) {        
        let margin = 15;
        this.target.table.push({
            x: (col - 1) * (120 + margin) + 'px',
            y: (row - 1) * (160 + margin) + 'px',
            z: this.opts.z
        });
    },

    getSum(count) {
        let sum = 0;
        while(count > 0) {
            sum += count;
            count--;
        }
        return sum;
    },

    getSphereArr() {
        let raw = 9, max = 18, sphere = {}, vDeg = 0, step = 0,
            len = 0, count = 0, start = 0, end = 0;

        for (let i = 0; i < raw; i++) {
            vDeg = (180 / (raw - 1)) * i;
            if (vDeg == 0 || vDeg == 180) {
                len = 1;
            } else {                
                len = Math.ceil(Math.abs(Math.sin(vDeg * Math.PI / 180)) / 1 * max);
            }
            sphere[i] = {
                len: len
            }
            count += len;
        }

        step = Math.ceil((table.length / 5 - count) / raw);
        for (let key in sphere) {
            sphere[key].len += step;
            end = start + sphere[key].len * 5;
            sphere[key].arrs = table.slice(start, end);
            start = end;
        }
        return sphere;
    },

    initSphere() {
        let sphere = this.getSphereArr(),
            vDeg = 0, hDeg = 0, r = 800, vRad = 0, hRad = 0, raws = 9,
            x = 0, y = 0, z = 0;

        for (let raw in sphere) {
            for (let j = 0, len = sphere[raw].arrs.length; j < len; j+=5) {
                vDeg = (180 / (raws - 1)) * raw;
                hDeg = (360 / (len / 5)) * (j / 5);
                vRad = vDeg * Math.PI / 180;
                hRad = hDeg * Math.PI / 180;

                x = r * Math.sin(vRad) * Math.cos(hRad);
                y = -r * Math.cos(vRad);
                z = r * Math.sin(vRad) * Math.sin(hRad);

                this.target.sphere.push({
                    matrix: this.getMatrix3d(hDeg, vDeg, x, y, z)
                });
            }
        }
        
    },

    getRotateZ(hDeg, deg) {
        // if ((hDeg >= 0 && hDeg <= 180)) {
        //     return (deg - 90);
        // } else {
        //     return (90 - deg);
        // }
        return 90 - deg;
    },

    getRotateY(deg) {
        return deg - 90;
    },

    getMatrix3d(hdeg, vdeg, x, y, z) {
        let hRad = this.getRotateY(hdeg) * Math.PI / 180;
        let vRad = this.getRotateZ(hdeg, vdeg) * Math.PI / 180;

        let martrix = this.getEleMatrix(hRad, vRad, x, y, z);
        return this.getCss3Matrix(martrix).join(',');
    },

    multiMatrix(m1, m2) {
        let arr = [],
            sum = 0,
            count = m2[0].length;

        m1.forEach((v, i) => {
            arr.push([]);
            for (let j = 0; j < count; j++) {                
                v.forEach((item, index) => {
                    sum += item * m2[index][j];
                });                
                arr[i].push(sum);
                sum = 0;
            }
        })
        return arr;
    },

    getCss3Matrix(arr) {
        let res = [];
        arr.forEach((v, i) => {
            v.forEach((item, index) => {
                if (i == 0) {
                    res.push([]);
                }
                res[index][i] = item;
            });
        })
        return res;
    },

    getEleMatrix(hd, vd, x, y, z) {
        let moveMatrix = [
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
            [0, 0, 0, 1]
        ]
        let yMatrix = [
            [Math.cos(hd), 0, -Math.sin(hd), 0],
            [0, 1, 0, 0],
            [Math.sin(hd), 0, Math.cos(hd), 0],
            [0, 0, 0, 1]
        ]
        let xMatrix = [
            [1, 0, 0, 0],
            [0, Math.cos(vd), -Math.sin(vd), 0],
            [0, Math.sin(vd), Math.cos(vd), 0],
            [0, 0, 0, 1]
        ]

        let m1 = this.multiMatrix(moveMatrix, yMatrix);
        
        return this.multiMatrix(m1, xMatrix);
    },

    transform(type) {
        if (!type) {
            return;
        }
        let nodes = Array.prototype.slice.call(this.box.children, 0),
            pos = this.target[type];

        nodes.forEach((node, i) => {
            this.setTransform(node, pos[i]);
        });
    },

    setTransform(node, pos) {
        let transform = pos.matrix ? `matrix3d(${pos.matrix})` : `translate3d(${pos.x}, ${pos.y}, ${pos.z})`;
        node.style.transform = transform;
    },

    setTransition(node, time, transType) {
        node.style.transition = `transform ${time} cubic-bezier(0.89, 0.01, 0.1, 0.99)`;
    }
}