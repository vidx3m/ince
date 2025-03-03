import Link from "next/link";

export default function Home() {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh", 
            backgroundColor: "#f8f8f8", 
            fontFamily: "Inter, sans-serif", 
            color: "#333", 
            padding: "40px", 
            textAlign: "center",
            width: "100vw"
        }}>
            <h1 style={{ 
                fontSize: "2rem", 
                fontWeight: "600", 
                marginBottom: "10px", 
                color: "#192938", 
                fontFamily: "Norwester, sans-serif"
            }}>
                Insurance, simplified
            </h1>
            <p style={{ fontSize: "1rem", maxWidth: "600px", marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>
                Smarter Home and Auto insurance research and comparison, find the best coverage, effortlessly.
            </p>
            
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                backgroundColor: "#ffffff", 
                padding: "10px", 
                borderRadius: "30px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                gap: "10px",
                maxWidth: "600px",
                width: "100%"
            }}>
                <label style={{ fontSize: "0.9rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#333" }}>
                    <input type="checkbox" id="home" name="insuranceType" value="home" style={{ marginRight: "5px" }} /> Home
                </label>
                <label style={{ fontSize: "0.9rem", cursor: "pointer", display: "flex", alignItems: "center", color: "#333" }}>
                    <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginRight: "5px" }} /> Auto
                </label>
                
                <input 
                    type="text" 
                    placeholder="Postal Code" 
                    maxLength={7} 
                    style={{ 
                        padding: "10px", 
                        borderRadius: "20px", 
                        border: "1px solid #aaa", 
                        backgroundColor: "#f0f0f0", 
                        color: "#333", 
                        outline: "none", 
                        fontSize: "0.8rem",
                        width: "100px",
                        textAlign: "center"
                    }}
                />
                
                <Link href="/get-a-quote">
                    <button className="button" style={{ 
                        padding: "10px 20px", 
                        fontSize: "0.9rem", 
                        borderRadius: "20px", 
                        cursor: "pointer", 
                        backgroundColor: "#7afff5", 
                        color: "white", 
                        border: "none", 
                        fontWeight: "bold", 
                        transition: "all 0.3s ease-in-out"
                    }}>
                        Start
                    </button>
                </Link>
            </div>
        </div>
    );
}