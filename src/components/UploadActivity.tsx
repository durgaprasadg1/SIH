import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Upload, 
  FileText, 
  Calendar, 
  Tag, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

interface UploadActivityProps {
  isMobile?: boolean;
}

export function UploadActivity({ isMobile = false }: UploadActivityProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    file: null as File | null
  });
  
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    "Academic Achievement",
    "Certification",
    "Workshop/Seminar",
    "Competition",
    "Volunteer Work",
    "Internship",
    "Project",
    "Leadership",
    "Sports/Cultural"
  ];

  const recentSubmissions = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Certification",
      date: "2024-01-15",
      status: "approved",
      category: "Certification"
    },
    {
      id: 2,
      title: "React Development Workshop",
      date: "2024-01-12",
      status: "pending",
      category: "Workshop/Seminar"
    },
    {
      id: 3,
      title: "Hackathon Participation",
      date: "2024-01-08",
      status: "rejected",
      category: "Competition"
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-secondary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-accent text-accent-foreground';
      case 'rejected':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">Upload Activity</h1>
        <p className="text-muted-foreground">
          Submit your certificates, achievements, and activities for approval
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>New Submission</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Activity Title</Label>
              <Input 
                id="title"
                placeholder="e.g., AWS Cloud Practitioner Certification"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                placeholder="Provide details about the activity, what you learned, and its relevance..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Completion Date</Label>
                <Input 
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                />
              </div>
            </div>

            {/* File Upload Area */}
            <div className="space-y-2">
              <Label>Certificate/Document</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-primary bg-primary/10' 
                    : 'border-muted-foreground/25 hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.file ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">{formData.file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                    <div>
                      <p className="font-medium">Drag & drop your file here</p>
                      <p className="text-sm text-muted-foreground">or click to browse</p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileChange}
                />
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Choose File
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB)
              </p>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1">
                Submit for Approval
              </Button>
              <Button variant="outline">
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Submissions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSubmissions.map((submission) => (
              <div key={submission.id} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{submission.title}</p>
                    <p className="text-xs text-muted-foreground">{submission.date}</p>
                  </div>
                  {getStatusIcon(submission.status)}
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {submission.category}
                  </Badge>
                  <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                    {submission.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle>Submission Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Upload className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm">Submit</span>
            </div>
            
            <Progress value={33} className="flex-1 h-2" />
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Review</span>
            </div>
            
            <Progress value={0} className="flex-1 h-2" />
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Approved</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}